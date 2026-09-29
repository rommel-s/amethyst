export const metadata = {
  title: "Amethyst | Geode",
  icons: {
    shortcut: "/amethyst-icon.png",
    apple: "/amethyst-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <div className="geode-wrapper">{children}</div>;
}
