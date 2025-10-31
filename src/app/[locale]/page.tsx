import NewsBanner from "@/components/NewsBanner";
import React from "react";

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
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
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

export default function SectionPage({ params }: { params: { locale: string } }) {
  return (
    <main>

      <NewsBanner />

      <section className="container mx-auto p-4">
        {/* 3 Columns × 2 Rows */}
        <GridSection
          title="Notícias"
          cols={3}
          items={["1col", "2col", "3col", "4col", "5col", "6col"]}
        />
      </section>

      <section className="container mx-auto p-4">
        {/* 4 Columns × 1 Row */}
        <GridSection
          title="Trabalho"
          cols={4}
          items={["1col", "2col", "3col", "4col"]}
        />
      </section>

      <section className="container mx-auto p-4">
        {/* 3 Columns, each with stacked boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { color: "bg-green-200", title: "Educação" },
            { color: "bg-blue-200", title: "Esportes" },
            { color: "bg-red-200", title: "Cultura e Lazer" },
          ].map((col, i) => (
            <div key={i} className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">{col.title}</h2>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`flex items-center justify-center ${col.color} rounded-lg w-full mb-4 h-24`}
                >
                  {n}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 2 Columns, each with 2 boxes */}
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { color: "bg-green-200", title: "Comunidade" },
            { color: "bg-blue-200", title: "Saúde e Bem-estar" },
          ].map((col, i) => (
            <div key={i} className="col-span-1">
              <h2 className="text-xl font-semibold mb-3">{col.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {["1col", "2col"].map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-green-200 rounded-lg aspect-video"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Columns × 1 Row */}
      <section className="container mx-auto p-4">
        <GridSection
          title="Podcasts"
          cols={4}
          items={["1col", "2col", "3col", "4col"]}
        />
      </section>
      
    </main>
  );
}
