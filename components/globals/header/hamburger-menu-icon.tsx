import React from 'react';

interface HamburgerMenuIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function HamburgerMenuIcon({ 
  className = "", 
  width = 36, 
  height = 36 
}: HamburgerMenuIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 36 36" 
      fill="none"
      className={className}
    >
      <path 
        d="M30.75 11.25H5.24999M30.75 18H9.74999M30.75 24.75H5.24999" 
        stroke="white" 
        strokeLinecap="round"
      />
    </svg>
  );
}
