import {client} from '@/lib/sanity.client';
import Link from 'next/link';

type IntlString = {
  _key: string; // locale key, e.g., 'pt-BR', 'en', 'es'
  value: string;
};

type SectionDoc = {
  _id: string;
  slug?: string | null;
  title?: IntlString[] | null;
  color?: string | null;
};

export default async function Navigation({ locale, extraClasses }: { locale: string, extraClasses?: string }) {
  
  const sections: SectionDoc[] = await client.fetch(
    `*[_type == "section" && coalesce(showInNavigation, true) == true]
      | order(coalesce(order, 0) asc){
        _id,
        "slug": slug.current,
        title,
        color
      }`
  );

  const getTitle = (titleArr: IntlString[] | null | undefined) => {
    if (!titleArr || titleArr.length === 0) return '(no title)';
    return (
      titleArr.find((t) => t._key === locale)?.value ||
      titleArr.find((t) => t._key === 'pt-BR')?.value ||
      titleArr[0]?.value ||
      '(no title)'
    );
  };

  return (
    <nav aria-label="Main">
      <ul className={`flex gap-4 ${extraClasses}`}>
        {sections
          .filter((s) => Boolean(s.slug))
          .map((s) => (
            <li key={s._id}>
              <Link href={`/${s.slug}`} className='text-gray-600 hover:text-gray-900'>{getTitle(s.title ?? [])}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
