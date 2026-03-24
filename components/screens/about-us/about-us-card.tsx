"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import TeamMemberModal from '@/components/globals/team-member-modal/team-member-modal';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import type { MemberProps } from '@/types/types';

// Extend MemberProps to include fields needed for component functionality
export interface TeamMember extends MemberProps {
  id: number;
  position: string; // Will use role from Sanity
  description?: string; // Will use content from Sanity
}

interface AboutUsCardProps {
  members: TeamMember[];
}

export default function AboutUsCard({ members }: AboutUsCardProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1600); // Default for SSR
  const [isClient, setIsClient] = useState(false);

  // Responsive logic
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Calculate columns based on screen size
  const columnsPerRow = windowWidth < 605 ? 1 : windowWidth < 910 ? 2 : windowWidth < 1230 ? 3 : 4;
  
  // Calculate how many items are in the last row
  const totalItems = members.length;
  const fullRows = Math.floor(totalItems / columnsPerRow);
  const remainingItems = totalItems % columnsPerRow;

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // Helper function to render a team member card
  const renderMemberCard = (member: TeamMember, index: number, isLastRow: boolean = false) => (
    <li
      key={member.id}
      className={`w-full h-auto p-[18px] rounded-[6px] cursor-pointer block flex-1 transition-all duration-300 hover:scale-[1.02] ${isLastRow ? '' : ''}`}
      style={{
        ...(isLastRow && { maxWidth: `calc((100% - ${(columnsPerRow - 1) * (columnsPerRow === 4 ? 20 : 34)}px) / ${columnsPerRow})` }),
        background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(150deg, rgba(142, 132, 132, 0.20) 7.84%, rgba(20, 12, 12, 0.20) 63.62%), rgba(255, 255, 255, 0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
      }}
      onClick={() => handleMemberClick(member)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleMemberClick(member);
        }
      }}
      aria-label={`View details for ${member.name}, ${member.position}`}
    >
      <article className="h-full flex flex-col gap-4">
        {/* Team Member Photo */}
        <figure>
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={`${member.name}, ${member.position}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] max-h-[300px] object-cover object-top rounded-md"
            />
          ) : (
            <div className="w-full h-[300px] max-h-[300px] bg-black bg-opacity-20 rounded-md flex items-center justify-center">
              <span className="text-[#C7C7C7] text-sm font-neue-montreal">No Image Available</span>
            </div>
          )}
        </figure>

        {/* Member Name */}
        <h4 className="text-white text-[24px] font-normal uppercase text-left font-helvetica">
          {member.name}
        </h4>

        {/* Decorative Line */}
        <div>
          <DecorativeLine 
            mainLineWidth={106}
            oneLine={true}
            isRotated={false}
            ariaLabel={`Decorative line for ${member.name}`}
            className={isLastRow ? '' : 'ml-[-17px] mt-[-25px]'}
          />
        </div>

        {/* Member Position */}
        <p className="text-[#C7C7C7] text-[16px] text-left font-neue-montreal mt-[-25px] mb-4">
          {member.position}
        </p>

        {/* More Info Button */}
        <div className="flex justify-start mt-auto">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when clicking button
              handleMemberClick(member);
            }}
            className="bg-transparent cursor-pointer text-white font-normal font-helvetica text-[14px] py-1 px-3 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200"
            aria-label={`Learn more about ${member.name}, ${member.position}`}
          >
            MORE INFO
          </button>
        </div>
      </article>
    </li>
  );

  return (
    <section className="w-full">
      <div className="relative">
        <BlurEffect variant="card"/>
      </div>
      
      <div className="w-full max-w-[1600px] mx-auto px-8">
        {/* Full rows in grid - responsive columns */}
        {fullRows > 0 && (
          <ul className={`grid ${columnsPerRow === 4 ? 'grid-cols-4' : columnsPerRow === 3 ? 'grid-cols-3' : columnsPerRow === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-[20px] mb-[34px]`} role="list">
            {members.slice(0, fullRows * columnsPerRow).map((member, index) => 
              renderMemberCard(member, index, false)
            )}
          </ul>
        )}

        {/* Last incomplete row - centered */}
        {remainingItems > 0 && (
          <ul className="flex justify-center gap-[34px]" role="list">
            {members.slice(fullRows * columnsPerRow).map((member, index) => 
              renderMemberCard(member, fullRows * columnsPerRow + index, true)
            )}
          </ul>
        )}
      </div>

      {/* Team Member Details Modal */}
      <TeamMemberModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}