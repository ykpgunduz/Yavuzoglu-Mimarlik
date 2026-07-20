import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yavuzoğlu Mimarlık ile iletişime geçin. Beşiktaş, İstanbul merkezli ofisimizde projelerinizi birlikte değerlendirelim. Telefon, e-posta ve adres bilgileri.",
  openGraph: {
    title: "İletişim | Yavuzoğlu Mimarlık",
    description:
      "Mimari projeleriniz için bizimle iletişime geçin. Beşiktaş, İstanbul merkezli ofisimiz.",
    images: ["/images/headers/iletisim-desktop.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Yavuzoğlu Mimarlık",
    description:
      "Mimari projeleriniz için bizimle iletişime geçin. Beşiktaş, İstanbul merkezli ofisimiz.",
    images: ["/images/headers/iletisim-desktop.jpg"],
  },
  alternates: {
    canonical: "https://yavuzoglumimarlik.com/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
