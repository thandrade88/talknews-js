import {client} from '@/lib/sanity.client'
import {notFound} from 'next/navigation'
import {hasLocale} from 'next-intl'
import {routing} from '@/i18n/routing'
import type {Metadata} from 'next'
import  '@/styles/globals.css'

type IntlString = {
  _key: string
  value: string
}

type SectionDoc = {
  _id: string
  slug?: string | null
  title?: IntlString[] | null
}

function pickTitle(titleArr: IntlString[] | null | undefined, locale: string) {
  if (!titleArr || titleArr.length === 0) return '(no title)'
  return (
    titleArr.find((t) => t._key === locale)?.value ||
    titleArr.find((t) => t._key === 'pt-BR')?.value ||
    titleArr[0]?.value ||
    '(no title)'
  )
}

async function fetchSection(slug: string): Promise<SectionDoc | null> {
  const data: SectionDoc[] = await client.fetch(
    `*[_type == "section" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title
    }`,
    {slug}
  )
  return (data as unknown as SectionDoc) || null
}

export async function generateMetadata({params}: {params: {locale: string; section: string}}): Promise<Metadata> {
  const {locale, section} = await params
  const doc = await fetchSection(section)
  const title = pickTitle(doc?.title, locale)
  return {title}
}

export default async function SectionLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {locale: string; section: string}
}) {
  const {locale, section} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const doc = await fetchSection(section)
  if (!doc) {
    notFound()
  }

  const title = pickTitle(doc.title, locale)

  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {children}
      </div>
    </section>
  )
}

