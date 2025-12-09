import SectionBanner from "@/components/SectionBanner";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";

export default async function SectionPage({ params }: { params: { section: string, locale: string } }) {

  const { section } = await params;

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
                <Card
                  key={n}
                  article={{ title: n.toString(), section: col.title }}
                  variant="horizontal"
                  className="mb-4"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}
