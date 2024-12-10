"use client";

import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Result:', result);

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setResponseMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen xl:w-[calc(100vw-350px)] bg-[#eee] flex items-center max-sm:px-5 md:px-20">
      <div className="overflow-hidden flex flex-col md:flex-row max-w-full max-sm:gap-5 w-full">
        <div className="md:w-1/2 w-full max-sm:px-0 px-6 relative bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 md:opacity-50"></div>
          <div className="relative z-10 text-white">
            <div className="bg-white bg-opacity-90 rounded-lg p-4 text-gray-800 space-y-4">
              <div className="flex items-center space-x-2">
                <LocationOnIcon color="primary" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm">Kankhal, Haridwar, Uttarakhand</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon color="primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm">+91 88630 75268</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <AccessTimeIcon color="primary" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-sm">Mon - Sun, 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Comment or message"
              variant="outlined"
              size="small"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Page;