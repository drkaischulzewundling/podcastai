import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingTier: React.FC<{ name: string; price: string; features: string[]; recommended?: boolean }> = ({ name, price, features, recommended }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md ${recommended ? 'border-2 border-primary' : ''}`}>
    {recommended && <div className="text-primary font-semibold mb-4">Recommended</div>}
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="text-4xl font-bold mb-6">{price}<span className="text-xl text-gray-600">/month</span></div>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Link to="/generator" className={`block w-full text-center py-2 px-4 rounded-md ${recommended ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} hover:opacity-90 transition duration-300`}>
      Get Started
    </Link>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic"
            price="$9.99"
            features={[
              "5 podcasts per month",
              "Up to 15 minutes per podcast",
              "2 AI voices",
              "Basic analytics"
            ]}
          />
          <PricingTier
            name="Pro"
            price="$24.99"
            features={[
              "20 podcasts per month",
              "Up to 30 minutes per podcast",
              "5 AI voices",
              "Advanced analytics",
              "Priority support"
            ]}
            recommended
          />
          <PricingTier
            name="Enterprise"
            price="Custom"
            features={[
              "Unlimited podcasts",
              "Custom podcast length",
              "10+ AI voices",
              "White-label solution",
              "API access",
              "Dedicated account manager"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;