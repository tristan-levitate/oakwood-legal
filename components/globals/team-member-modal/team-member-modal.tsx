"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import OLGLogoSvg from '@/components/globals/olg-logo-svg/olg-logo-svg';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import PortableTextComponent from '@/components/globals/portable-text-component/portable-text-component';
import type { TeamMember } from '@/components/screens/about-us/about-us-card';

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [originalTitle, setOriginalTitle] = useState('');
  const [originalDescription, setOriginalDescription] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle metadata changes when modal opens/closes
  useEffect(() => {
    if (isOpen && member) {
      // Store original metadata only once when modal opens
      if (!originalTitle) {
        setOriginalTitle(document.title);
      }
      if (!originalDescription) {
        const metaDescription = document.querySelector('meta[name="description"]');
        setOriginalDescription(metaDescription?.getAttribute('content') || '');
      }
      
      // Update metadata with member info
      document.title = member.seo_title || `${member.name} - Oakwood Legal Group`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', member.seo_description || `Learn more about ${member.name}, ${member.role} at Oakwood Legal Group.`);
      }
    }
    
    return () => {
      if (originalTitle && !isOpen) {
        document.title = originalTitle;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && originalDescription) {
          metaDescription.setAttribute('content', originalDescription);
        }
        // Reset stored values
        setOriginalTitle('');
        setOriginalDescription('');
      }
    };
  }, [isOpen, member]); // Remove originalTitle and originalDescription from dependencies

  useEffect(() => {
    if (isOpen) {
      // Only prevent scrolling while modal is open, don't store scroll position
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Simply restore scrolling without changing scroll position
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  // Handle scroll progress for gradient effect
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const maxScroll = scrollHeight - clientHeight;
    
    if (maxScroll > 0) {
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen, member]);

  if (!isOpen || !member) return null;

  // Check if member has content from Sanity
  const hasContent = member.content && Array.isArray(member.content) && member.content.length > 0;

  // Calculate gradient opacity based on scroll progress
  const gradientOpacity = Math.max(0, 2 - scrollProgress * 2); // Fade out as user scrolls down

  return (
    <>
      {/* Modal Backdrop */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center max-[500px]:px-4"
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      >
        {/* Team Member Details Modal */}
        <dialog 
          className="relative p-8 overflow-hidden w-full max-w-[744px]"
          style={{
            height: '750px',
            borderRadius: '6px',
            border: '1px solid #4E4E4E',
            background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), #000',
            boxShadow: '10px 18px 90px 0 rgba(0, 0, 0, 0.40)'
          }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open
        >
          {/* Background Logo */}
          <div 
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              transform: 'translate(20%, -30%)',
              opacity: 0.8
            }}
            aria-hidden="true"
          >
            <OLGLogoSvg width={320} height={320} />
          </div>
          
          {/* Modal Header */}
          <header className="flex items-start justify-between mb-8 relative z-10">
            {/* Team Member Info */}
            <div className="flex items-center gap-6">
              {/* Member Photo */}
              <figure 
                className="overflow-hidden"
                style={{
                  width: '95px',
                  height: '95px',
                  borderRadius: '95px'
                }}
              >
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.position} at Oakwood Legal Group`}
                    width={95}
                    height={95}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-[#C7C7C7] text-xs font-neue-montreal">No Image</span>
                  </div>
                )}
              </figure>

              {/* Member Name and Position */}
              <div className="flex flex-col gap-2">
                <h5 
                  id="modal-title"
                  className="text-white uppercase"
                  style={{
                    fontFamily: 'var(--font-helvetica), Helvetica, Arial, sans-serif',
                    fontSize: '24px',
                    fontWeight: 'normal'
                  }}
                >
                  {member.name}
                </h5>
                <p 
                  className="text-[#C7C7C7]"
                  style={{
                    fontSize: '16px'
                  }}
                >
                  {member.position}
                </p>
              </div>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="text-white hover:text-[#FF6460] transition-colors duration-200 flex items-center justify-center mt-2 mr-[-5px]"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                width: '32px',
                height: '32px'
              }}
              aria-label={`Close ${member.name} details modal`}
              type="button"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </header>

          {/* Decorative Separator */}
          <div className="flex-shrink-0 mb-5" role="separator" aria-hidden="true">
            <DecorativeLine 
              mainLineWidth={292}
              isRotated={false}
              ariaLabel={`Decorative line separator for ${member.name} modal`}
            />
          </div>

          {/* Member Biography */}
          <div className="relative">
            <main 
              ref={scrollContainerRef}
              id="modal-description"
              className="text-[#C7C7C7] leading-relaxed overflow-y-auto relative z-10"
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                maxHeight: 'calc(695px - 200px)', // Adjust based on header height
                paddingRight: '8px',
                whiteSpace: 'pre-line' // This allows \n to create line breaks
              }}
              role="region"
              aria-label={`Biography of ${member.name}`}
            >
              <article>
                <h6 className="sr-only">Professional Background</h6>
                {hasContent ? (
                  <PortableTextComponent content={member.content} />
                ) : (
                  <p className="text-[#C7C7C7]">
                    No detailed information available for {member.name} at this time.
                  </p>
                )}
              </article>
            </main>

            {/* Scroll Gradient Indicator - Only visible on mobile when there's scrollable content */}
            <div 
              className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 max-[500px]:block hidden"
              style={{
                height: '60px',
                background: `linear-gradient(to top, rgba(0, 0, 0, ${gradientOpacity * 0.8}) 0%, rgba(0, 0, 0, ${gradientOpacity * 0.4}) 50%, transparent 100%)`,
                transition: 'opacity 0.3s ease-in-out'
              }}
              aria-hidden="true"
            />
          </div>
        </dialog>
      </div>
    </>
  );
}
