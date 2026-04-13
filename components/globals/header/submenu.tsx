"use client";

import Link from "next/link";
import { ActiveTabIndicator } from "../shared-components/shared-components";
import type { PracticeAreaMenuItem } from "@/types/types";

interface SubmenuProps {
  items: PracticeAreaMenuItem[];
  pathname: string;
}

export default function Submenu({ items, pathname }: SubmenuProps) {
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, "");
  const isPracticeAreaDetailPage = items.some((item) => item.slug === normalizedPath);
  const isPracticeAreasActive = pathname === "/practice-areas" || isPracticeAreaDetailPage;

  return (
    <div className="relative group z-40">
      {isPracticeAreasActive && <ActiveTabIndicator />}

      <Link
        href="/practice-areas"
        className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${
          isPracticeAreasActive
            ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
            : "text-white hover:text-gray-300"
        }`}
        aria-current={isPracticeAreasActive ? "page" : undefined}
      >
        Practice Areas
      </Link>

      {items.length > 0 && (
        <div className="absolute left-0 z-50 top-full pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
          <div className="w-[920px] max-w-[90vw] rounded-md border border-white/10 bg-[#140C0C]/70 backdrop-blur-sm p-3 shadow-xl">
            <div className="grid grid-cols-4 grid-rows-5 gap-2">
              {items.map((item) => {
                const href = `/${item.slug}`;
                const isItemActive = pathname === href;

                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={`relative block rounded-md text-sm leading-snug transition-colors duration-200 ${
                      isItemActive
                        ? "text-white px-4 py-2 pl-8"
                        : "text-white hover:bg-white/10 px-3 py-2"
                    }`}
                  >
                    {isItemActive && <ActiveTabIndicator />}
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
