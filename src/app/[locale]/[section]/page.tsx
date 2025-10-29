export default async function SectionPage({params}: {params: {section: string, locale: string}}) {
  
  const {section, locale} = await params;

  return (
    <main>
      Teste de Section
      <div>{section} {locale}       </div>
    </main>
  );
}
