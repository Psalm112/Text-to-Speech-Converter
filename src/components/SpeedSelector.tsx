import React from "react";

interface SpeedSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const SpeedSelector: React.FC<SpeedSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="speed"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Speed: {value.toFixed(1)}x
      </label>
      <input
        id="speed"
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0.5x</span>
        <span>1.0x</span>
        <span>2.0x</span>
      </div>
    </div>
  );
};

export default SpeedSelector;
