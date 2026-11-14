import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caixa dos Devs",
  description: "Caixa dos Devs — estudos de Portugol e JavaScript",
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        
        {/* O CONTEÚDO DO SITE: Esta div recebe os filtros */}
        <div id="main-wrapper" className="flex-1 flex flex-col w-full">
          {children}
        </div>

        {/* OS BOTÕES: Totalmente de fora, blindados contra o filtro! */}
        <FloatingButtons />

      </body>
    </html>
  );
}