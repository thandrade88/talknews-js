import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./../../styles/globals.css";
import { client } from '@/lib/sanity.client';
import { getArticles } from '@/lib/queries';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talk News",
  description: "Portal de Notícias",
};
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};
 
export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const sections = await client.fetch(
    `*[_type == "section" && coalesce(showInNavigation, true) == true]
      | order(coalesce(order, 0) asc){
        _id,
        "slug": slug.current,
        title,
        color
      }`
  );

  const articles = await getArticles();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} sections={sections} />
          {children}
          <Footer locale={locale} sections={sections}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
