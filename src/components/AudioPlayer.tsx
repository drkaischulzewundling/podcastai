import React, { useRef, useState } from 'react';
import { Play, Pause, Download } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-6">
      <audio ref={audioRef} src={audioUrl} className="hidden" />
      <div className="flex items-center justify-between bg-base-200 rounded-lg p-4">
        <button
          onClick={togglePlayPause}
          className="btn btn-primary btn-circle"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <div className="flex-grow mx-4">
          <progress className="progress progress-primary w-full" value="33" max="100"></progress>
        </div>
        <a
          href={audioUrl}
          download="generated-podcast.mp3"
          className="btn btn-secondary btn-circle"
        >
          <Download className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default AudioPlayer;