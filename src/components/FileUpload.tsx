import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full max-w-md p-8 text-center border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
        isDragActive ? 'border-primary bg-primary-content' : 'border-base-300 hover:border-primary'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-primary mb-4" />
      <p className="text-lg text-base-content">
        {isDragActive
          ? 'Drop the file here'
          : 'Drag & drop a PDF or text file here, or click to select'}
      </p>
    </div>
  );
};

export default FileUpload;