import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface CustomSelectProps {
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  className?: string;
}

export default function CustomSelect({
  name,
  label,
  placeholder,
  options,
  className = "",
}: CustomSelectProps) {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fieldValue = watch(name);
  const hasError = errors[name];

  const handleDropdownSelect = (value: string) => {
    setValue(name, value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectedOption = options.find(opt => opt.value === fieldValue);

  return (
    <div className={`relative w-full pt-4 max-[560px]:pb-6 ${className}`}>
      {/* Hidden input for form registration */}
      <input
        {...register(name)}
        type="hidden"
        value={fieldValue || ""}
      />
      
      {/* Dropdown Trigger */}
      <div
        onClick={toggleDropdown}
        className={`w-full bg-transparent text-sm sm:text-base lg:text-lg pb-2 pt-3 border-0 border-b-1 cursor-pointer transition-all duration-200 pr-8 sm:pr-10 ${
          fieldValue ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'
        } ${
          isDropdownOpen ? 'border-[#FF6460]' : 'border-[rgba(255,255,255,0.7)]'
        }`}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {/* Label */}
      <label
        className="absolute left-0 top-0 text-[rgba(255,255,255,0.7)] text-sm lg:text-[14px] font-helvetica font-normal leading-[1.4] capitalize transition-all duration-200 z-10 pointer-events-none"
      >
        {label}
      </label>

      {/* Custom dropdown arrow */}
      <div className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className={`w-5 h-5 text-[rgba(255,255,255,0.7)] transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <div
          className="absolute top-full left-0 w-full bg-[#140C0C] border border-[rgba(255,255,255,0.3)] rounded-md mt-1 z-50 max-h-48 overflow-y-auto custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#FF6460 #140C0C'
          }}
        >
          {options.slice(1).map((option) => (
            <div
              key={option.value}
              onClick={() => handleDropdownSelect(option.value)}
              className="px-4 py-3 text-white hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors duration-200 border-b border-[rgba(255,255,255,0.1)] last:border-b-0"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {hasError && (
        <p className="absolute left-0 max-[560px]:bottom-0 min-[560px]:top-full text-red-500 text-sm max-[560px]:mt-0 min-[560px]:mt-1 z-20 px-1">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
