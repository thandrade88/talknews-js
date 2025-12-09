type Article = {
  id?: string;
  slug?: string;
  title: string;
  section: string;
  imageUrl?: string;
};


export default async function ArticlePage({ params }: { params: { section: string, locale: string, slug: string } }) {

  const { locale, slug } = await params;

  return (
    <main>

      <section className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4">          
          <h1 className="text-2xl font-bold mb-4">{slug}</h1>
          <figure>
            <img src="https://placehold.co/600x400/png" className="w-full h-64 object-cover" alt={`${slug}`} />
          </figure>
          <p className="text-gray-600">This is a single post/article page</p>
        </div>
      </section>

      
    </main>
  );
}
