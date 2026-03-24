import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { OLGIcon } from "../shared-components/shared-components";

interface CustomInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  className?: string;
}

export default function CustomInput({
  name,
  label,
  placeholder,
  type = "text",
  className = "",
}: CustomInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [fieldId, setFieldId] = useState(`${name}-input`);
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    // Generate unique ID only on client to avoid hydration issues
    setFieldId(`${name}-${Math.random().toString(36).substr(2, 9)}`);
  }, [name]);

  const fieldValue = watch(name);
  const hasValue = fieldValue && fieldValue.length > 0;
  const hasError = errors[name];

  return (
    <div className={`relative w-full pt-3 max-[560px]:pb-6 ${className}`}>
      <input
        {...register(name)}
        type={type}
        id={fieldId}
        className="w-full bg-transparent text-white text-sm sm:text-base lg:text-lg border-0 border-b-1 border-[rgba(255,255,255,0.7)] focus:border-[#FF6460] focus:outline-none transition-all duration-200 peer placeholder-transparent pr-8 sm:pr-10 pb-2 pt-3"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={fieldId}
        className="absolute left-0 top-0 text-[rgba(255,255,255,0.7)] text-sm lg:text-[14px] font-helvetica font-normal leading-[1.4] capitalize transition-all duration-200 peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm lg:peer-focus:text-[14px] peer-focus:text-[rgba(255,255,255,0.7)] z-10 pointer-events-none"
      >
        {label}
      </label>
      {/* OLG Icon */}
      <div className="absolute right-1 sm:right-2 bottom-6 max-[560px]:bottom-12">
        <OLGIcon isActive={isFocused} />
      </div>
      {/* Error Message */}
      {hasError && (
        <p className="absolute left-0 max-[560px]:bottom-0 min-[560px]:top-full text-red-500 text-sm max-[560px]:mt-0 min-[560px]:mt-1 z-20 px-1">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
