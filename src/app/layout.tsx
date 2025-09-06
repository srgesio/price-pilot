import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PricePilot | Precificação Inteligente de Serviços",
  description: "Calcule preços de serviços de forma dinâmica, transparente e estratégica. Simule custos, margens e valores em tempo real com interface moderna.",
  keywords: [
    "precificação",
    "serviços",
    "simulador de preço",
    "lucro",
    "cálculo de preço",
    "consultoria",
    "PricePilot",
    "tecnologia",
    "dinâmico",
    "negócios"
  ],
  authors: [{ name: "Gesio Junior", url: "https://github.com/srgesio" }],
  creator: "Gesio Junior",
  openGraph: {
    title: "PricePilot | Precificação Inteligente de Serviços",
    description: "Calcule preços de serviços de forma dinâmica, transparente e estratégica.",
    url: "https://pricepilot.app", // Troque para o domínio real se desejar
    siteName: "PricePilot",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PricePilot - Precificação Inteligente de Serviços"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PricePilot | Precificação Inteligente de Serviços",
    description: "Calcule preços de serviços de forma dinâmica, transparente e estratégica.",
    creator: "@srgesio",
    images: ["/og-image.png"]
  },
  metadataBase: new URL("https://pricepilot.app"),
  themeColor: "#0078d4",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
