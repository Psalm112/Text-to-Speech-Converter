import React from "react";

interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[];
  selectedVoice: string;
  onVoiceChange: (voice: string) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({
  voices,
  selectedVoice,
  onVoiceChange,
}) => {
  return (
    <div>
      <label
        htmlFor="voice"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Voice
      </label>
      <select
        id="voice"
        className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedVoice}
        onChange={(e) => onVoiceChange(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
        {voices.length === 0 && <option value="">Loading voices...</option>}
      </select>
      <p className="mt-1 text-xs text-gray-500">
        {voices.length} voices available
      </p>
    </div>
  );
};

export default VoiceSelector;
