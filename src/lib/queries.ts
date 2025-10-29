import { client } from './sanity.client'

export async function getNavigationSections(locale: string = 'pt-BR') {
  const query = `*[_type == "section" && showInNavigation == true] | order(order asc) {
    _id,
    title,
    slug,
    color
  }`

  const sections = await client.fetch(query)
  return sections
}

export async function getPosts(locale: string = 'pt-BR', section?: string) {
  const query = `*[_type == "post" ${section ? `&& section->slug.current == "${section}"` : ''}] | order(publishedAt desc) {
    _id,
    title,
    slug,
    section->{
      title,
      slug,
      color
    },
    coverImage,
    excerpt,
    publishedAt
  }`

  return await client.fetch(query)
}

export async function getSections(locale: string = 'pt-BR') {
  const query = `*[_type == "section"] | order(order asc) {
    _id,
    title,
    slug,
    color,
    showInNavigation
  }`

  return await client.fetch(query)
}