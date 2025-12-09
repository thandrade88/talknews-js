import React from "react";

interface SectionLayoutProps {
  image?: string;
  section?: string;
  locale?: string;
}

const SectionBanner: React.FC<SectionLayoutProps> = ({
  image = "",
  section = "",
  locale = ""
}) => {
  return (
    <section className="p-4">
      

      
        <div className="container mx-auto relative h-full col-span-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image !== "" ? image : 'https://placehold.co/600x400'})` }}>
          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
          <div className="px-4 py-8 h-full">
            <h1 className="text-4xl font-bold text-white text-center">{section}</h1>
          </div>
        </div>

    </section>
  );
};

export default SectionBanner;
