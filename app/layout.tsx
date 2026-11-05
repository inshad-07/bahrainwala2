import type { Metadata } from "next";
import { Inter, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Header2 from "@/components/Contact/Header2";
import Footer from "@/components/Footer";
import Header3 from "@/components/Contact/Header3";

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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Header/> */}
        {/* <Header2/> */}
        <Header3/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
