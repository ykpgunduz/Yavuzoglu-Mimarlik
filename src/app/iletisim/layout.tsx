import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yavuzoğlu Mimarlık ile iletişime geçin. Beşiktaş, İstanbul merkezli ofisimizde projelerinizi birlikte değerlendirelim.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
