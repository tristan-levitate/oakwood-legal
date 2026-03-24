import React from 'react';

interface VectorIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeOpacity?: number;
  className?: string;
}

export default function VectorIcon({
  width = 49,
  height = 48,
  fill = "none",
  stroke = "white",
  strokeOpacity = 0.6,
  className = ""
}: VectorIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 49 48" 
      fill={fill}
      className={className}
      style={{
        flexShrink: 0,
        strokeWidth: '1px'
      }}
    >
      <path 
        d="M47.8311 0.831238V43.3234H40.9248V12.6223L6.39355 47.1535L1.50879 42.2687L36.04 7.73749H5.33887V0.831238H47.8311Z" 
        stroke={stroke !== "none" ? stroke : undefined} 
        strokeOpacity={stroke !== "none" ? strokeOpacity : undefined}
        fill={fill !== "none" ? fill : "none"}
      />
    </svg>
  );
}
