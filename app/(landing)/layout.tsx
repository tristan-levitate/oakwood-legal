"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

// LP routes that should render with NO header, NO footer, and no max-width container.
const BARE_ROUTES = ["/ca/employment-law"];

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudioPage = pathname.includes("studio");
  const isBare = BARE_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );

  // Bare LP pages: render children only (full width, no header/footer wrapper).
  if (isBare) {
    return <div className="w-full">{children}</div>;
  }

  // If it's a studio page, render children without the max-width container
  if (isStudioPage) {
    return <div className="w-full">{children}</div>;
  }

  // For all other pages, render children with the max-width container
  return <div className="w-full max-w-[1600px] mx-auto">{children}</div>;
}
