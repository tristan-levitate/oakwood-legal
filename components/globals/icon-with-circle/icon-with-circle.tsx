import React from "react";

interface IconWithCircleProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "large" | "extra-large";
  variant?: "red" | "dark-red";
}

/**
 * Icon with Circle Background Component
 * 
 * @param children - The icon component to render inside the circle
 * @param className - Additional CSS classes
 * @param size - "small" (28x28), "large" (32x32), or "extra-large" (40x40)
 * @param variant - "red" (gradient) or "dark-red" (solid #7D110E)
 */
const IconWithCircle = ({ 
  children, 
  className = "", 
  size = "small", 
  variant = "red" 
}: IconWithCircleProps) => {
  // Size configurations
  const sizeClasses = {
    small: "w-7 h-7 rounded-[14.5px]",      // 28x28
    large: "w-8 h-8 rounded-[16px]",        // 32x32
    "extra-large": "w-10 h-10 rounded-[20px]" // 40x40
  };

  // Background configurations
  const backgroundStyles = {
    red: {
      className: "bg-gradient-to-br from-[rgba(255,255,255,0.40)] via-transparent to-transparent",
      style: { 
        background: 'linear-gradient(150deg, rgba(255, 255, 255, 0.40) 5.45%, rgba(255, 255, 255, 0.00) 41.89%), #C02B27' 
      }
    },
    "dark-red": {
      className: "bg-[#7D110E]",
      style: {}
    }
  };

  const bgConfig = backgroundStyles[variant];

  return (
    <div 
      className={`flex p-[7px] justify-center items-center ${sizeClasses[size]} ${bgConfig.className} ${className}`}
      style={bgConfig.style}
    >
      {children}
    </div>
  );
};

export default IconWithCircle;
