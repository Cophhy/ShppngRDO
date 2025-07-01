// layout.jsx

import './globals.css';
import AboveHeader from '@/components/AboveHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Shopping Plaza RDO',
  description: 'Site oficial do Shopping Plaza Rio das Ostras',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AboveHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
