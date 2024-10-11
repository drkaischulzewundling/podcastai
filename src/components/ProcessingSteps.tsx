import React from 'react';
import { FileText, Brain, Mic, Headphones } from 'lucide-react';

interface ProcessingStepsProps {
  currentStep: number;
}

const steps = [
  { icon: FileText, label: 'Uploading' },
  { icon: Brain, label: 'Processing' },
  { icon: Mic, label: 'Generating Script' },
  { icon: Headphones, label: 'Creating Audio' },
];

const ProcessingSteps: React.FC<ProcessingStepsProps> = ({ currentStep }) => {
  return (
    <ul className="steps steps-horizontal w-full mb-8">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index < currentStep ? 'step-primary' : ''}`}
          data-content={index < currentStep ? '✓' : ''}
        >
          <div className="flex flex-col items-center mt-2">
            <step.icon className="h-6 w-6" />
            <span className="mt-1 text-xs">{step.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProcessingSteps;