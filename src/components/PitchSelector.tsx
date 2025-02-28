import React from "react";

interface PitchSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const PitchSelector: React.FC<PitchSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="pitch"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Pitch: {value.toFixed(1)}
      </label>
      <input
        id="pitch"
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Low</span>
        <span>Normal</span>
        <span>High</span>
      </div>
    </div>
  );
};

export default PitchSelector;
