// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Padre Ramon",
  description: "Causa de Padre Ramon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${merriweather.className} bg-white text-black`}>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
