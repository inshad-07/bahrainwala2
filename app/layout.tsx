import type { Metadata } from "next";
import { Inter, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Header2 from "@/components/Contact/Header2";
import Footer from "@/components/Footer";
import Header3 from "@/components/Contact/Header3";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import GoogleTranslateFloatingButton from "@/components/GoogleTranslateFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bahrainwala",
  description: "Bahrainwala website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css" />
      </head>
      <body className="min-h-full">
        {/* <Header/> */}
        {/* <Header2/> */}
        <Header3/>
        <div className="pt-24">
          {children}
        </div>
        <Footer/>
        <WhatsAppFloatingButton/>
        <GoogleTranslateFloatingButton/>
        </body>
    </html>
  );
}
