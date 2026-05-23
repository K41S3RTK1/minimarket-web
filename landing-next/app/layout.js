import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MiniMarket Web",
  description: "Landing page informativa de MiniMarket Web creada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <nav className="navbar">
            <Link href="/" className="logo">
              MiniMarket Web
            </Link>

            <div className="nav-links">
              <Link href="/">Inicio</Link>
              <Link href="/about">Acerca de</Link>
              <Link href="/categories">Categorías</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>MiniMarket Web | Landing creada con Next.js</p>
          <p>Proyecto académico de Sistemas y Tecnologías Web</p>
        </footer>
      </body>
    </html>
  );
}
