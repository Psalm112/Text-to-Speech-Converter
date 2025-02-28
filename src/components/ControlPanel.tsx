import React from "react";
import { FaPlay, FaPause, FaStop, FaDownload } from "react-icons/fa";

interface ControlPanelProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onDownload: () => void;
  disableControls: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  onDownload,
  disableControls,
}) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button
        type="button"
        onClick={onPlay}
        disabled={disableControls}
        className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
          disableControls
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        }`}
      >
        <FaPlay /> Play
      </button>

      <button
        type="button"
        onClick={onPause}
        disabled={disableControls || !isPlaying}
        className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
          disableControls || !isPlaying
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
        }`}
      >
        <FaPause /> Pause
      </button>

      <button
        type="button"
        onClick={onStop}
        disabled={disableControls || !isPlaying}
        className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
          disableControls || !isPlaying
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600 transition-colors"
        }`}
      >
        <FaStop /> Stop
      </button>

      <button
        type="button"
        onClick={onDownload}
        disabled={disableControls}
        className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
          disableControls
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700 transition-colors"
        }`}
      >
        <FaDownload /> Save Text
      </button>
    </div>
  );
};

export default ControlPanel;
