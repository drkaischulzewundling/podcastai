import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { FileText, Brain, Mic, Headphones, Users, Zap, Globe, Lock } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={FileText}
            title="Multiple File Formats"
            description="Support for PDFs, text files, and more"
          />
          <FeatureCard
            icon={Brain}
            title="Advanced NLP"
            description="Extract key information with AI-powered analysis"
          />
          <FeatureCard
            icon={Mic}
            title="Natural Conversations"
            description="Generate realistic dialogues between multiple speakers"
          />
          <FeatureCard
            icon={Headphones}
            title="High-Quality Audio"
            description="Create professional-sounding podcasts with AI voices"
          />
          <FeatureCard
            icon={Users}
            title="Voice Customization"
            description="Choose from a variety of AI voices and accents"
          />
          <FeatureCard
            icon={Zap}
            title="Fast Processing"
            description="Generate podcasts in minutes, not hours"
          />
          <FeatureCard
            icon={Globe}
            title="Multi-Language Support"
            description="Create podcasts in various languages"
          />
          <FeatureCard
            icon={Lock}
            title="Secure & Private"
            description="Your content is processed securely and kept private"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;