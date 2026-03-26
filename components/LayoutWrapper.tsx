"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudioPage = pathname.includes("studio");

  // If it's a studio page, render children without the max-width container
  if (isStudioPage) {
    return <div className="w-full">{children}</div>;
  }

  // For all other pages, render children with the max-width container
  return <div className="w-full max-w-[1600px] mx-auto">{children}</div>;
}
