import React from "react";

/**
 * OLG SVG Icon Component
*/
export const OLGIcon = ({ isActive }: { isActive: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 20 8" fill="none">
    <path d="M19.5776 7.79209V5.8881C18.9501 7.02401 17.7818 7.78128 16.4512 7.78128C14.4606 7.78128 12.8379 6.09365 12.8379 4.01657C12.8379 1.92867 14.4606 0.230225 16.4512 0.230225C17.176 0.230225 17.8359 0.457405 18.4092 0.83604L18.1821 1.23631C17.6844 0.911767 17.0894 0.684586 16.4512 0.684586C14.7094 0.684586 13.2706 2.19912 13.2706 4.01657C13.2706 5.81238 14.7094 7.32691 16.4512 7.32691C18.0522 7.32691 19.3829 6.02874 19.5776 4.41684H17.2841V4.01657H19.9995V7.79209H19.5776Z" fill={isActive ? "#FF6460" : "white"} fillOpacity={isActive ? "1" : "0.7"} />
    <path d="M9.26074 0.219238H9.73674V7.37001H13.2202V7.80274H9.26074V0.219238Z" fill={isActive ? "#FF6460" : "white"} fillOpacity={isActive ? "1" : "0.7"} />
    <path d="M4.59088 0.197266C6.59224 0.197266 8.21496 1.89571 8.21496 3.9836C8.21496 6.0715 6.59224 7.78076 4.59088 7.78076C2.58952 7.78076 0.966797 6.0715 0.966797 3.9836C0.966797 1.89571 2.58952 0.197266 4.59088 0.197266ZM4.59088 7.3264C6.34342 7.3264 7.81469 5.80105 7.81469 3.9836C7.81469 2.17698 6.34342 0.651626 4.59088 0.651626C2.84916 0.651626 1.36707 2.17698 1.36707 3.9836C1.36707 5.80105 2.84916 7.3264 4.59088 7.3264Z" fill={isActive ? "#FF6460" : "white"} fillOpacity={isActive ? "1" : "0.7"} />
  </svg>
);

/**
 * Active Tab Indicator Component
*/
export const ActiveTabIndicator = ({ variant = "default" }: { variant?: "default" | "footer" }) => (
  <>
    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-b from-[rgba(212,205,208,0.5)] to-[rgba(255,255,255,0.2)]">
      <div className="w-full h-full rounded-md bg-[#140C0C]" />
    </div>
    {/* Red Dot */}
    <div className={`absolute top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#C02B27] blur-[0.5px] shadow-[0_0_5px_#C02B27] ${
      variant === "footer" ? "left-3" : "left-4"
    }`} />
  </>
);
