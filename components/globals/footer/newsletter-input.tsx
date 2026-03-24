import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { OLGIcon } from "../shared-components/shared-components";

interface NewsletterInputProps {
  name: string;
  placeholder: string;
  type?: "text" | "email";
  className?: string;
}

export default function NewsletterInput({
  name,
  placeholder,
  type = "text",
  className = "",
}: NewsletterInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [fieldId, setFieldId] = useState(`${name}-newsletter`);
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    // Generate unique ID only on client to avoid hydration issues
    setFieldId(`${name}-${Math.random().toString(36).substr(2, 9)}`);
  }, [name]);

  const fieldValue = watch(name);
  const hasValue = fieldValue && fieldValue.length > 0;
  const hasError = errors[name];

  return (
    <div className={`relative ${className}`}>
      <input
        {...register(name)}
        type={type}
        id={fieldId}
        className="w-full bg-transparent text-white text-sm pb-2 border-0 border-b-1 border-[rgba(255,255,255,0.7)] focus:border-[#FF6460] focus:outline-none transition-all duration-200 pr-10 placeholder-[rgba(255,255,255,0.7)]"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {/* OLG Icon */}
      <div className="absolute right-2 bottom-4">
        <OLGIcon isActive={isFocused} />
      </div>
      {/* Error Message */}
      {hasError && (
        <p className="absolute left-0 top-full text-red-500 text-sm mt-1 z-20 px-1">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
