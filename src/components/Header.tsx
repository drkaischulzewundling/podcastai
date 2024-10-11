import React from 'react';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold text-primary">
          <Mic className="w-8 h-8 mr-2" />
          PodcastAI
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/features" className="hover:text-primary">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/generator" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">Try Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;