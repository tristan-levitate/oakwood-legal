import React from 'react';

interface ContactBlurBackgroundProps {
  className?: string;
}

/**
 * Contact Blur Background Component
 * 
 * Renders the blurred red background effect for the contact section
 * using pure CSS with blur filter for optimal performance.
 * Replaces the complex SVG with a CSS-based solution.
 */
export default function ContactBlurBackground({ className = "" }: ContactBlurBackgroundProps) {
  return (
    <div 
      className={`contact-blur-background ${className}`}
      style={{
        width: '774px',
        height: '1025px',
        position: 'relative',
        pointerEvents: 'none',
      }}
    >
      <div
        className="contact-red-blur"
        style={{
          position: 'absolute',
          left: '0px',
          top: '300px',
          width: '518px',
          height: '185px',
          background: '#C02B27',
          borderRadius: '50% 40% 60% 30%',
          transform: 'rotate(-15deg)',
          filter: 'blur(200px)',
          opacity: 0.8,
        }}
      />
    </div>
  );
}
