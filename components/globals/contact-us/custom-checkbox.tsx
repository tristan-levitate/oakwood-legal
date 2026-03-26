import React from "react";
import { useFormContext } from "react-hook-form";

interface CustomCheckboxProps {
  name: string;
  label: string;
  className?: string;
}

export default function CustomCheckbox({
  name,
  label,
  className = "",
}: CustomCheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[name];

  return (
    <div className={`relative flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <input
          {...register(name)}
          type="checkbox"
          id={name}
          className="w-3 h-3 cursor-pointer appearance-none border-2 border-[rgba(255,255,255,0.7)] checked:border-[#FF6460] bg-transparent focus:outline-none relative peer"
          style={{
            backgroundImage: 'none'
          }}
        />
        {/* Custom Check Icon */}
        <svg
          className="absolute top-2 left-0.5 w-2 h-2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 6L4.5 8.5L10 3"
            stroke="#FF6460"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <label 
        htmlFor={name} 
        className="text-sm mt-1 cursor-pointer text-white font-helvetica"
      >
        {label}
      </label>
       {/* Error Message */}
       {hasError && (
         <p className="absolute left-0 top-full text-red-500 text-sm mt-1 z-20 px-1">
           {hasError.message as string}
         </p>
       )}
    </div>
  );
}
