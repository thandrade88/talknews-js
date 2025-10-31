import Link from 'next/link'
import Navigation from './Navigation'

export default function Footer({ locale }: { locale: string }) {
  return (
    <footer className="bg-gray-50 border-t">

      <div className="container mx-auto p-4">

        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              TalkNews
            </Link>
          </div>
          <div className="flex-grow">
            <Navigation locale={locale} extraClasses="justify-end" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mt-6 text-center md:text-left text-xs text-gray-500">
            <p>© {new Date().getFullYear()} TalkNews. All rights reserved.</p>
          </div>
          <ul className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
            <li>
              <a href="mailto:contact@talknews.ie" className="hover:text-gray-900">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Terms</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
