import React from 'react'
import type { Metadata } from 'next';
import DualTitle from '@/components/globals/dual-title/dual-title'
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider'
import ContentCard from '@/components/globals/content-card/content-card'
import ContactUs from '@/components/globals/contact-us/contact-us'
import { CaseInTheNewsProps } from '@/types/types'

export const metadata: Metadata = {
    title: "Cases in the News - Oakwood Legal Group",
    description: "ABOUT OAKWOOD LEGAL CASES IN THE NEWS Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Our Case Results Former Salinas…",
};

export default function CasesInTheNews() {
    // const casesInTheNews = await getLatestCasesInTheNews();
    
    // Filler content for now 
    const mockCasesInTheNews: CaseInTheNewsProps[] = [
        {
            imageUrl: "/images/three_people_injured_after_they_say_suspected_drunken_driver_smashed_into_their_car_in_oakdale.webp",
            title: "Three People Injured After They Say Suspected Drunken Driver Smashed into their Car in Oakdale",
            description: "A woman, her brother and her boyfriend were seriously injured after a driver suspected of being drunk crashed into their car.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "http://fox40.com/2018/01/22/three-people-injured-after-they-say-suspected-drunken-driver-smashed-into-their-car-in-oakdale/",
            titleForSEO: "Three People Injured After They Say Suspected Drunken Driver Smashed into their Car in Oakdale",
            descriptionForSEO: "A woman, her brother and her boyfriend were seriously injured after a driver suspected of being drunk crashed into their car.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/family_files_claim_over_alleged_hazing_incident_involving_upland_high_baseball_team.webp",
            title: "Family files claim over alleged hazing incident involving Upland High baseball team",
            description: "A family is filing a claim after video released allegedly shows a hazing incident by members of the Upland High School baseball team.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "https://abc7.com/post/upland-high-school-baseball-team-faces-hazing-allegations/14897650/",
            titleForSEO: "Family files claim over alleged hazing incident involving Upland High baseball team",
            descriptionForSEO: "A family is filing a claim after video released allegedly shows a hazing incident by members of the Upland High School baseball team.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/former_nba_player_ben_gordon_released_on_bail_after_weekend_arrest.webp",
            title: "Former NBA player Ben Gordon released on bail after weekend arrest",
            description: "Former NBA guard Ben Gordon was released on $50,000 bail early Tuesday after spending the weekend in jail in Los Angeles on a felony robbery charge, the latest in a recent string of troubling incidents.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "https://www.espn.com/nba/story/_/id/21600538/former-nba-player-ben-gordon-arrested-felony-robbery-charge",
            titleForSEO: "Former NBA player Ben Gordon released on bail after weekend arrest",
            descriptionForSEO: "Former NBA guard Ben Gordon was released on $50,000 bail early Tuesday after spending the weekend in jail in Los Angeles on a felony robbery charge, the latest in a recent string of troubling incidents.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/turpin_siblings_file_civil_lawsuit_against_riverside_county_after_enduring_years_of_abuse.webp",
            title: "Turpin siblings file civil lawsuit against Riverside County after enduring years of abuse",
            description: "Six Turpin siblings who were subject to years of child abuse at the hands of their foster parents after enduring more than a decade of abuse by their biological parents at their home in Perris filed a lawsuit against Riverside County.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "https://abc7.com/post/turpin-siblings-file-civil-lawsuit-riverside-county-after-enduring-years-abuse/15451575/",
            titleForSEO: "Turpin siblings file civil lawsuit against Riverside County after enduring years of abuse",
            descriptionForSEO: "Six Turpin siblings who were subject to years of child abuse at the hands of their foster parents after enduring more than a decade of abuse by their biological parents at their home in Perris filed a lawsuit against Riverside County.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/drunken_driver_allegedly_kills_san_bernardino_woman_crashes_into_sheriff_s_van.webp",
            title: "Drunken driver allegedly kills San Bernardino woman, crashes into sheriff’s van",
            description: "A San Bernardino woman was killed early Saturday morning when authorities say a drunken driving suspect crashed into her, pushing her vehicle into the back of a San Bernardino County sheriff’s transport van carrying six inmates, San Bernardino police said.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "https://www.sbsun.com/2017/06/03/drunken-driver-allegedly-kills-san-bernardino-woman-crashes-into-sheriffs-van/",
            titleForSEO: "Drunken driver allegedly kills San Bernardino woman, crashes into sheriff’s van",
            descriptionForSEO: "A San Bernardino woman was killed early Saturday morning when authorities say a drunken driving suspect crashed into her, pushing her vehicle into the back of a San Bernardino County sheriff’s transport van carrying six inmates, San Bernardino police said.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/2_killed_in_horrific_crash_on_hwy_99_near_yuba_city.webp",
            title: "2 killed in 'horrific' crash on Hwy. 99 near Yuba City",
            description: "Deadly crash shut down Hwy. 99 for nearly 3 hours",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "2 killed in horrific crash on Hwy. 99 near Yuba City",
            descriptionForSEO: "Deadly crash shut down Hwy. 99 for nearly 3 hours",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/man_recovering_in_hospital_after_being_struck_by_car_during_vigil_for_cyclist_in_south_l_a_.webp",
            title: "Man Recovering in Hospital After Being Struck by Car During Vigil for Cyclist in South LA",
            description: "A man was recovering Thursday after a vehicle struck him during a vigil for a cyclist killed in South Los Angeles.",
            slug: "understanding-your-rights-after-car-accident-california",
            link: "http://ktla.com/2018/04/12/man-recovering-in-hospital-after-being-struck-by-car-during-vigil-for-cyclist-in-south-l-a/",
            titleForSEO: "Man Recovering in Hospital After Being Struck by Car During Vigil for Cyclist in South LA",
            descriptionForSEO: "A man was recovering Thursday after a vehicle struck him during a vigil for a cyclist killed in South Los Angeles.",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
    ];

    return (
        <main className="relative z-20">
            <DualTitle
                titleWhite="CASES IN"
                titleRed="THE NEWS"
                message="Oakwood Legal Group transforms your experience from one of personal injury to personal attention."
                page="cases-in-the-news"
            />

            <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 mt-12 max-[1125px]:mt-8 mb-4 max-[560px]:px-2 max-[560px]:overflow-visible" aria-labelledby="news-media">
                <h2 id="news-media" className="sr-only">Featured in News Media</h2>
                <LogosCarousel variant="news" />
            </section>

            <section aria-labelledby="cases-news-list">
                <h2 id="cases-news-list" className="sr-only">Cases Featured in News</h2>
                <ContentCard items={mockCasesInTheNews} page="cases-in-the-news" />
            </section>

            <ContactUs />
        </main>
    )
}