import React from "react";
import SectionBanner from "@/components/SectionBanner";

interface GridSectionProps {
  title: string;
  cols: number;
  items: string[];
  color?: string;
}

const GridSection: React.FC<GridSectionProps> = ({
  title,
  cols,
  items,
  color = "bg-green-200",
}) => {
  return (
    <>
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4`}>
        {items.map((label, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${color} rounded-lg aspect-video`}
          >
            {label}
          </div>
        ))}
      </div>
    </>
  );
};

export default async function SectionPage({ params }: { params: { section: string, locale: string } }) {

  const { section, locale } = await params;

  return (
    <main>

      <SectionBanner section={section} />

      <section className="container mx-auto">
        {/* 3 Columns × 2 Rows */}
        <GridSection
          title=""
          cols={3}
          items={["1col", "2col", "3col", "4col", "5col", "6col"]}
        />
      
        {/* 3 Columns, each with stacked boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 xs:gap-4 md:gap-4">
          {[
            { color: "bg-green-200", title: "Educação" },
            { color: "bg-blue-200", title: "Esportes" },
          ].map((col, i) => (
            <div key={i} className="col-span-1">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`flex items-center justify-center ${col.color} rounded-lg w-full h-50 mb-4`}
                >
                  {n}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}
