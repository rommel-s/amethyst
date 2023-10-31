import Footer from '@/components/LayoutComponents/Footer';
import Header from '@/components/LayoutComponents/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amethyst | Sobre Nós',
  description: 'Amethyst Design Criativo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-light_gray">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
