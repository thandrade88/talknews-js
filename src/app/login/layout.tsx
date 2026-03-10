
import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./../../styles/globals.css";

export const metadata: Metadata = {
  title: "Talk News",
  description: "Portal de Notícias",
};
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};
 
export default async function LoginLayout({children, params}: Props) {

  return (
    <html>
      <body>
        <Header locale={""} sections={[]} />
            {children}
            <Footer locale={""} sections={[]} />                  
      </body>
    </html>
  );
}
