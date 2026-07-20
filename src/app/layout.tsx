import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Yavuzoğlu Mimarlık | İstanbul",
    template: "%s | Yavuzoğlu Mimarlık",
  },
  description:
    "Yavuzoğlu Mimarlık, İstanbul Beşiktaş'ta faaliyet gösteren bir mimarlık ofisidir. Konut, ticari ve kültürel projelerde bağlama duyarlı, yaşanabilir mekanlar tasarlıyoruz.",
  keywords: [
    "mimarlık",
    "mimari tasarım",
    "İstanbul",
    "Beşiktaş",
    "Yavuzoğlu",
    "konut tasarımı",
    "ticari mimarlık",
  ],
  openGraph: {
    title: "Yavuzoğlu Mimarlık",
    description: "Mekanı anlamak, yaşamı tasarlamak.",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
