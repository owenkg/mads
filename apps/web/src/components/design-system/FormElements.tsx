import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export function Select({ label, options, error, className = '', id, ...props }: SelectProps) {
  const selectId = id || label.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={selectId} className="font-mono text-xs uppercase tracking-widest text-[#8A6040]">
        {label}
      </label>
      <select
        id={selectId}
        className="w-full bg-transparent border-b border-[#3D1F0A]/30 py-3 font-sans text-lg text-[#1A0C04] focus:outline-none focus:border-[#C4712A] transition-colors appearance-none cursor-pointer"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#F2E0C0]">
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="font-mono text-[10px] text-[#C4412A] tracking-wider uppercase mt-1">{error}</span>}
    </div>
  );
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, className = '', id, ...props }: CheckboxProps) {
  const checkboxId = id || label.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="w-5 h-5 border-2 border-[#3D1F0A] rounded-sm bg-transparent checked:bg-[#C4712A] checked:border-[#C4712A] focus:outline-none focus:ring-2 focus:ring-[#C4712A]/30 transition-colors cursor-pointer appearance-none relative
        checked:after:content-['✓'] checked:after:absolute checked:after:text-[#F2E0C0] checked:after:text-sm checked:after:top-[-2px] checked:after:left-[3px] checked:after:font-bold"
        {...props}
      />
      <label htmlFor={checkboxId} className="font-sans text-sm text-[#1A0C04] cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

export interface RadioGroupProps {
  label: string;
  options: { value: string; label: string }[];
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({ label, options, name, value, onChange, className = '' }: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <label className="font-mono text-xs uppercase tracking-widest text-[#8A6040]">
        {label}
      </label>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-5 h-5 border-2 border-[#3D1F0A] rounded-full bg-transparent checked:border-[#C4712A] focus:outline-none focus:ring-2 focus:ring-[#C4712A]/30 transition-colors cursor-pointer appearance-none relative
              checked:after:content-[''] checked:after:absolute checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-[#C4712A] checked:after:rounded-full checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
            />
            <label 
              htmlFor={`${name}-${option.value}`} 
              className="font-sans text-sm text-[#1A0C04] cursor-pointer select-none"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
