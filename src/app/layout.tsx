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

const BASE_URL = "https://yavuzoglumimarlik.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yavuzoğlu Mimarlık | İstanbul Mimarlık Ofisi",
    template: "%s | Yavuzoğlu Mimarlık",
  },
  description:
    "Yavuzoğlu Mimarlık, İstanbul Beşiktaş'ta faaliyet gösteren bir mimarlık ofisidir. Konut, ticari ve kültürel projelerde bağlama duyarlı, yaşanabilir mekanlar tasarlıyoruz.",
  keywords: [
    "mimarlık",
    "mimari tasarım",
    "İstanbul mimarlık",
    "Beşiktaş",
    "Yavuzoğlu Mimarlık",
    "konut tasarımı",
    "ticari mimarlık",
    "kültürel yapı",
    "iç mimarlık",
    "mimar İstanbul",
    "mimarlık ofisi",
    "modern mimarlık",
    "sürdürülebilir mimarlık",
  ],
  authors: [{ name: "Yavuzoğlu Mimarlık" }],
  creator: "Yavuzoğlu Mimarlık",
  publisher: "Yavuzoğlu Mimarlık",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "Yavuzoğlu Mimarlık",
    title: "Yavuzoğlu Mimarlık | İstanbul Mimarlık Ofisi",
    description:
      "İstanbul Beşiktaş'ta bağlama duyarlı, yaşanabilir mekanlar tasarlayan mimarlık ofisi. Konut, ticari ve kültürel projeler.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yavuzoğlu Mimarlık — Mekanı anlamak, yaşamı tasarlamak.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yavuzoğlu Mimarlık | İstanbul Mimarlık Ofisi",
    description:
      "İstanbul Beşiktaş'ta bağlama duyarlı, yaşanabilir mekanlar tasarlayan mimarlık ofisi.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    // Google Search Console doğrulama kodu eklenecekse:
    // google: "doğrulama-kodu",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  name: "Yavuzoğlu Mimarlık",
  alternateName: "Yavuzoglu Architecture",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/images/og-image.png`,
  description:
    "Yavuzoğlu Mimarlık, İstanbul Beşiktaş'ta faaliyet gösteren bir mimarlık ofisidir. Konut, ticari ve kültürel projelerde bağlama duyarlı, yaşanabilir mekanlar tasarlıyoruz.",
  founder: {
    "@type": "Person",
    name: "Kerem Yavuzoğlu",
    jobTitle: "Kurucu Mimar",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Türkali Mahallesi, Uzunçaova Caddesi No:18/1",
    addressLocality: "Beşiktaş",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  telephone: "+905333616344",
  email: "kerem@yavuzoglumimarlik.com",
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  knowsAbout: [
    "Mimari Tasarım",
    "Konut Tasarımı",
    "Ticari Mimarlık",
    "Kültürel Yapılar",
    "İç Mimarlık",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://instagram.com/yavuzoglumimarlik",
    "https://linkedin.com/company/yavuzoglumimarlik",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
