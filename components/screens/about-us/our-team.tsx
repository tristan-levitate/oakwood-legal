import React from 'react';
import OurTeamHero from './our-team-hero';
import AboutUsCard from './about-us-card';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import type { TeamMember } from './about-us-card';

interface OurTeamProps {
    titleWhite: string;
    titleRed: string;
    members: TeamMember[];
}

export default function OurTeam({ titleWhite, titleRed, members }: OurTeamProps) {
    return (
        <section className="w-full">
            {/* Team Hero Section */}
            <header>
                <OurTeamHero
                    titleWhite={titleWhite}
                    titleRed={titleRed}
                />
            </header>

            {/* Team Members Section */}
            <main className="mt-16">
                <h2 className="sr-only">Our Legal Team</h2>
                {members.length > 0 ? (
                    <AboutUsCard members={members} />
                ) : (
                    <div className="w-full max-w-[1600px] mx-auto px-8 py-16 text-center">
                        <p className="text-[#C7C7C7] text-lg font-neue-montreal">
                            No team members available at the moment.
                        </p>
                    </div>
                )}
            </main>
        </section>
    );
}