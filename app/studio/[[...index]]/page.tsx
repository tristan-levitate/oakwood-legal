"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <NextStudio config={config} />
      </div>
    </div>
  );
}
