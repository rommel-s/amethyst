import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";

export const metadata = {
  title: "AmethystDev | Design Criativo",
  icons: {
    shortcut: "/amethyst-icon.png",
    apple: "/amethyst-icon.png",
  },
};

export default function AmethystDevLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
