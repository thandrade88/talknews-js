import Navigation from './Navigation'
import Link from 'next/link'

  

export default async function Header({ locale, sections }: { locale: string, sections: any[] }) {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link
            href="/"            
            className="text-2xl font-bold text-gray-900"
          >
            TalkNews
          </Link>

          {/* Navigation */}
          <Navigation locale={locale} sections={sections || []} />

          {/* Language Switcher */}
          <div className="flex gap-4">
            <Link
              href="/pt-BR"              
              className={`text-sm ${locale === 'pt-BR' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              PT
            </Link>
            <Link
              href="/en"              
              className={`text-sm ${locale === 'en' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              EN
            </Link>
            <Link
              href="/es"
              className={`text-sm ${locale === 'es' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ES
            </Link>
          </div>
        </div>

       
      </div>
    </header>
  )
}