import React, { ChangeEvent } from "react";

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="mt-2">
      <label
        htmlFor="text"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Enter your text
      </label>
      <textarea
        id="text"
        rows={5}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type or paste your text here..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
