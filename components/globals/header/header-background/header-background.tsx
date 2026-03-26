import React from 'react';

interface HeaderBackgroundProps {
  className?: string;
}

export default function HeaderBackground({ className = "" }: HeaderBackgroundProps) {
  return (
    <div 
      className={`header-background ${className}`}
      style={{
        width: '539px',
        height: '562px',
        position: 'relative',
      }}
    >
      <div
        className="header-gradient-blur"
        style={{
          position: 'absolute',
          left: '100px',
          top: '-205px',
          width: '339px',
          height: '667px',
          background: 'linear-gradient(180deg, #7D110E 0%, #140C0C 100%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}