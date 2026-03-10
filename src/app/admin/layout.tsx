
import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/app/providers';
import "./../../styles/globals.css";
import LogoutButton from "@/components/LogoutButton";


export const metadata: Metadata = {
  title: "Talk News",
  description: "Portal de Notícias",
};
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};
 
export default async function AdminLayout({children, params}: Props) {

  return (
    <html>
      <body>
          <Header locale={""} sections={[]} />
          <LogoutButton />
          <Providers>
            {children}
          </Providers>
          <Footer locale={""} sections={[]} />                  
      </body>
    </html>
  );
}
