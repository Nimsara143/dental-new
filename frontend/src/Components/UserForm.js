import React from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

const UserForm = ({ formData, setFormData }) => (
  <div className="space-y-4">
    {[
      { label: 'Full Name', icon: <User />, type: 'text', field: 'name' },
      { label: 'Email', icon: <Mail />, type: 'email', field: 'email' },
      { label: 'Phone', icon: <Phone />, type: 'tel', field: 'phone' },
      { label: 'Notes', icon: <MessageSquare />, type: 'textarea', field: 'notes' },
    ].map(({ label, icon, type, field }) => (
      <div key={field}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>
          {type === 'textarea' ? (
            <textarea
              rows={4}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            />
          ) : (
            <input
              type={type}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            />
          )}
        </div>
      </div>
    ))}
  </div>
);

export default UserForm;
