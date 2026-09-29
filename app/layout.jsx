//import Footer from "@/components/Footer";
import "./globals.css";

import { Montserrat_Alternates, Open_Sans } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Amethyst | Design Criativo",
  icons: {
    shortcut: "/amethyst-icon.png",
    apple: "/amethyst-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${montserratAlternates.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
