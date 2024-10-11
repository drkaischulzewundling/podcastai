import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Content into Engaging Podcasts</h1>
        <p className="text-xl mb-8">Use AI-powered voices to create conversational podcasts from your text content</p>
        <Link to="/generator" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;