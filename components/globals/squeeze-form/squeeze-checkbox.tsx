import React from "react";
import { useFormContext } from "react-hook-form";

interface SqueezeCheckboxProps {
  name: string;
  label: string;
  className?: string;
}

export default function SqueezeCheckbox({
  name,
  label,
  className = "",
}: SqueezeCheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[name];

  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex items-start space-x-3">
        <div className="relative flex-shrink-0 mt-1">
          <input
            {...register(name)}
            type="checkbox"
            id={name}
            className="w-4 h-4 cursor-pointer appearance-none border border-[rgba(255,255,255,1)] checked:border-[#C02B27] bg-transparent focus:outline-none focus:border-[#C02B27] relative peer rounded-sm transition-all duration-200"
            style={{
              backgroundImage: 'none'
            }}
          />
          {/* Custom Check Icon */}
          <svg
            className="absolute top-1 left-0.5 w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 6L4.5 8.5L10 3"
              stroke="#C02B27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <label 
          htmlFor={name} 
          className="text-[14px] mt-1 max-[421px]:-mt-1 max-[421px]:ml-1 cursor-pointer text-[#C7C7C7] font-neue-montreal leading-[1.4] flex-1"
        >
          {label}
        </label>
      </div>
      {/* Error Message */}
      {hasError && (
        <p className="absolute left-0 top-full text-red-500 text-xs mt-1 z-20">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
