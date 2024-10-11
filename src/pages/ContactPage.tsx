import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-8">Have questions or need assistance? We're here to help. Fill out the form, and we'll get back to you as soon as possible.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <span>support@podcastai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <span>123 AI Street, Tech City, 12345</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;