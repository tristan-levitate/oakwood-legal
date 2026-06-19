"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

const BARE_ROUTES = ["/ca/employment-law"];

export default function LayoutWrapper({ children, header, footer }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudioPage = pathname.includes("studio");
  const isBare = BARE_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );

  if (isBare) {
    return <div className="w-full">{children}</div>;
  }

  if (isStudioPage) {
    return (
      <div className="w-full">
        {header}
        {children}
        {footer}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto">
      {header}
      {children}
      {footer}
    </div>
  );
}
