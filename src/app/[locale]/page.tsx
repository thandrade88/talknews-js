import NewsBanner from "@/components/NewsBanner";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";
import { getArticles } from "@/lib/queries";

export default async function SectionPage({ params }: { params: { locale: string } }) {

  const { locale } = await params;
  const articles = await getArticles(locale);

  function getLocalizedValue(array: any[], locale: string) {
    if (!Array.isArray(array)) return "";
  
    // 1. Try exact match
    const match = array.find(item => item._key === locale);
    if (match) return match.value;
  
    // 2. Try language-only match (e.g. "pt" from "pt-BR")
    const short = locale?.split("-")[0];
    const shortMatch = array.find(item => item._key.startsWith(short));
    if (shortMatch) return shortMatch.value;
  
    // 3. Fallback to first available value
    return array[0]?.value || "";
  }

  const articles_sanitized = articles.map((article: any) => ({
    ...article,
    slug: article.slug?.current,
    title: getLocalizedValue(article.title, locale),
    section: article.section.slug.current,
    id: article._id,
  }));

  console.log('articles_sanitized', articles, articles_sanitized);

  return (
    <main>

      <NewsBanner />

      <section className="container mx-auto p-4">
        {/* 3 Columns × 2 Rows */}
        <GridSection
          title="Notícias"
          cols={3}
          items={articles_sanitized}
          color="bg-green-200"          
          locale={locale}
        />
      </section>

      <section className="container mx-auto p-4">
        {/* 4 Columns × 1 Row */}
        <GridSection
          title="Trabalho"
          cols={4}
          items={articles_sanitized || []}
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
                  article={articles_sanitized[n]}
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
                    article={articles_sanitized[index]}
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
          items={articles_sanitized || []}
          color="bg-red-200"
        />
      </section>

    </main>
  );
}
