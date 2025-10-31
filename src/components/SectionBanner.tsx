import React from "react";

interface SectionLayoutProps {
  image?: string;
  section?: string;
  locale?: string;
}

const SectionBanner: React.FC<SectionLayoutProps> = ({
  image = undefined,
  section = "",
  locale = ""
}) => {
  return (
    <section className="p-4">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}>

        <div className="relative h-full">
          <img
            src={image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"/%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"/%3E%3C/svg>'}
            alt="Image placeholder"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SectionBanner;
