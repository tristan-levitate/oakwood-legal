import type { Metadata } from "next";

import DoNotSell from "@/components/screens/do-not-sell/do-not-sell";

export const metadata: Metadata = {
    title: "Do Not Sell or Share My Personal Information - Oakwood Legal Group",
    description: "Opt out of the sale or sharing of your personal information and submit a request to access, correct, or delete your data.",
};

export default function DoNotSellPage() {

    return (

        <main style={{ position: 'relative', zIndex: 1 }}>

            <DoNotSell />

        </main>

    );

}
