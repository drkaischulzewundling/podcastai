import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import ProcessingSteps from '../components/ProcessingSteps';
import AudioPlayer from '../components/AudioPlayer';

const GeneratorPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processingStep, setProcessingStep] = useState<number>(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    setProcessingStep(1);
    // Simulate processing steps
    setTimeout(() => setProcessingStep(2), 2000);
    setTimeout(() => setProcessingStep(3), 4000);
    setTimeout(() => {
      setProcessingStep(4);
      setAudioUrl('https://example.com/generated-podcast.mp3'); // Replace with actual generated audio URL
    }, 6000);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Generate Your Podcast</h1>
        {!file && (
          <div className="max-w-md mx-auto">
            <FileUpload onFileUpload={handleFileUpload} />
          </div>
        )}
        {file && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <ProcessingSteps currentStep={processingStep} />
            {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratorPage;