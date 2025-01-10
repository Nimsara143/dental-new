import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });

// User Registration Schema and Model
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  streetAddress: { type: String, required: true },
  postalCode: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

const Service = mongoose.model(
  'Service',
  new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
  })
);

const Appointment = mongoose.model(
  'Appointment',
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    notes: { type: String },
  })
);



// User Login Schema and Model (same collection as registration but used for validation)
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const UserLogin = mongoose.model('UserLogin', loginSchema, 'users'); // Reuse the same collection

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate the password (in production, hash the password and compare)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Respond with user details on successful login
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Routes

// Fetch all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Add a new service (optional for setup purposes)
app.post('/api/services', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add service' });
  }
});

// Fetch all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('service');
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Book a new appointment
app.post('/api/appointments', async (req, res) => {
  const { name, email, phone, serviceId, date, time, notes } = req.body;
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    const appointment = new Appointment({
      name,
      email,
      phone,
      service: serviceId,
      date,
      time,
      notes,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: 'Failed to book appointment' });
  }
});

// Register Endpoint
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, mobile, password, streetAddress, postalCode } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      password, // In production, hash the password before saving
      streetAddress,
      postalCode,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
