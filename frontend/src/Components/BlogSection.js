import React from 'react';

const BlogCard = ({ category, title, description, image }) => (
  <div className="flex flex-col">
    <img 
      src={image} 
      alt={title}
      className="w-full h-64 object-cover rounded-lg mb-4"
    />
    <div className="space-y-3">
      <span className="text-blue-500">{category}</span>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 line-clamp-3">{description}</p>
      <button className="text-blue-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
        Read More 
        <span className="text-lg">→</span>
      </button>
    </div>
  </div>
);

const BlogSection = () => {
  const blogs = [
    {
      category: "News",
      title: "Oral Cancer Awareness: Signs, Symptoms, and Prevention",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop"
    },
    {
      category: "Tips",
      title: "The Dos and Don'ts of Teeth Whitening: Expert Advice",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=500&auto=format&fit=crop"
    },
    {
      category: "Health",
      title: "Oral Health for All Ages: Tips for Kids, Teens, and Adults",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 px-12 px-12">
      <div className="text-center mb-12">
        <p className="text-blue-500 mb-2">Our Blogs</p>
        <h2 className="text-4xl font-bold mb-4">
          Blogs & <span className="text-blue-500">Articles</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;