import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { OLGIcon } from "../shared-components/shared-components";

interface SqueezeTextareaProps {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
  className?: string;
}

export default function SqueezeTextarea({
  name,
  label,
  placeholder,
  rows = 3,
  className = "",
}: SqueezeTextareaProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const fieldValue = watch(name);
  const hasValue = fieldValue && fieldValue.length > 0;
  const hasError = errors[name];

  return (
    <div className={`relative w-full pt-4 max-[559px]:pb-6 ${className}`}>
      <textarea
        {...register(name)}
        id={name}
        rows={rows}
        className="w-full bg-transparent text-white text-sm border-0 border-b-1 border-[rgba(255,255,255,0.7)] focus:border-[#FF6460] focus:outline-none transition-all duration-200 peer placeholder-transparent resize-none pr-8 pb-2 pt-3"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={name}
        className="absolute left-0 top-0 text-[rgba(255,255,255,0.7)] text-sm font-helvetica font-normal leading-[1.4] capitalize transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgba(255,255,255,0.7)] z-10 pointer-events-none"
      >
        {label}
      </label>
      {/* OLG Icon */}
      <div className="absolute right-2 top-3 max-[559px]:top-7">
        <OLGIcon isActive={isFocused} />
      </div>
      {/* Error Message */}
      {hasError && (
        <p className="absolute left-0 max-[559px]:bottom-0 min-[560px]:top-full text-red-500 text-sm max-[559px]:mt-0 min-[560px]:mt-1 z-20 px-1">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
