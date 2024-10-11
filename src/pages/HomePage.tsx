import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { FileText, Brain, Mic, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FileText}
              title="Upload Content"
              description="Upload your PDF or text file with ease"
            />
            <FeatureCard
              icon={Brain}
              title="AI Processing"
              description="Our AI analyzes and extracts key information"
            />
            <FeatureCard
              icon={Mic}
              title="Script Generation"
              description="Convert content into a conversational script"
            />
            <FeatureCard
              icon={Headphones}
              title="Audio Creation"
              description="Generate a podcast with AI-powered voices"
            />
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h2>
          <p className="text-xl mb-8">Start creating engaging podcasts with AI today</p>
          <Link to="/generator" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Try It Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;