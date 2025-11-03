// src/components/FeedbackForm.jsx
import React, { useState } from 'react';

export default function FeedbackForm({ onClose }) {
  const init = { firstName: '', lastName: '', address: '', country: '', email: '', phonePrefix: '+91', phone: '' };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.country.trim()) e.country = 'Required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid e-mail';
    if (!/^\d{6,15}$/.test(form.phone)) e.phone = 'Please enter a valid number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      // simulate submit
      alert('Feedback submitted — thank you!');
      setForm(init);
      setErrors({});
      if (onClose) onClose();
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2">Thank you so much for taking the time!</h2>
      <p className="mb-6 text-gray-600">Please provide the below details!</p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block mb-1">First Name:</label>
          <input value={form.firstName} onChange={(e)=>setForm({...form, firstName: e.target.value})}
            className="w-full p-3 rounded bg-white shadow-sm" placeholder="John" />
          {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
        </div>

        <div>
          <label className="block mb-1">Last Name:</label>
          <input value={form.lastName} onChange={(e)=>setForm({...form, lastName: e.target.value})}
            className="w-full p-3 rounded bg-white shadow-sm" placeholder="Doe" />
          {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
        </div>

        <div>
          <label className="block mb-1">Address:</label>
          <textarea value={form.address} onChange={(e)=>setForm({...form, address: e.target.value})}
            className="w-full p-3 rounded bg-white shadow-sm h-28" placeholder="Enter your full Postal Address" />
          {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}
        </div>

        <div>
          <label className="block mb-1">Country:</label>
          <input value={form.country} onChange={(e)=>setForm({...form, country: e.target.value})}
            className="w-full p-3 rounded bg-white shadow-sm" placeholder="India" />
          {errors.country && <div className="text-red-500 text-sm">{errors.country}</div>}
        </div>

        <div>
          <label className="block mb-1">Email ID:</label>
          <input value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})}
            className="w-full p-3 rounded bg-white shadow-sm" placeholder="example@sample.com" />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>

        <div className="flex gap-2">
          <div className="w-24">
            <label className="block mb-1">Prefix</label>
            <input value={form.phonePrefix} onChange={(e)=>setForm({...form, phonePrefix: e.target.value})}
              className="w-full p-3 rounded bg-white shadow-sm" />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Phone Number:</label>
            <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})}
              className="w-full p-3 rounded bg-white shadow-sm" placeholder="123456789" />
            {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
          </div>
        </div>

        <div>
          <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded font-bold">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
}
