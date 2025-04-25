import React from 'react';

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
  options?: { value: string; label: string }[];
  disabled?: boolean;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
};

export default function FormField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder = '',
  value = '',
  options = [],
  disabled = false,
  className = '',
  min,
  max,
  step,
  rows = 3
}: FormFieldProps) {
  const id = `field-${name}`;
  
  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            name={name}
            defaultValue={value}
            disabled={disabled}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${className}`}
            required={required}
          >
            <option value="">Selecione...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            defaultValue={value}
            disabled={disabled}
            rows={rows}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            placeholder={placeholder}
            required={required}
          />
        );
      
      case 'number':
        return (
          <input
            type="number"
            id={id}
            name={name}
            defaultValue={value}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            placeholder={placeholder}
            required={required}
          />
        );
      
      case 'date':
        return (
          <input
            type="date"
            id={id}
            name={name}
            defaultValue={value}
            disabled={disabled}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            required={required}
          />
        );
      
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            defaultValue={value}
            disabled={disabled}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            placeholder={placeholder}
            required={required}
          />
        );
    }
  };
  
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        {renderField()}
      </div>
    </div>
  );
}
