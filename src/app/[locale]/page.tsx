import NewsBanner from "@/components/NewsBanner";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";

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
          color="bg-green-200"
        />
      </section>

      <section className="container mx-auto p-4">
        {/* 4 Columns × 1 Row */}
        <GridSection
          title="Trabalho"
          cols={4}
          items={["1col", "2col", "3col", "4col"]}
          color="bg-blue-200"
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
                  <Card
                    key={index}
                    article={{ title: label, section: col.title }}
                  />
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
          color="bg-red-200"
        />
      </section>

    </main>
  );
}
