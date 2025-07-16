import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, textarea = false, required = false }) => {
  return (
    <div className="mb-4 text-left">
      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} value={value} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500" rows={4} />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500" />
      )}
    </div>
  );
};

export default InputField;
