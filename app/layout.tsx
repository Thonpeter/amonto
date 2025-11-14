import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";  // Adjust the path as needed
import Footer from "../components/Footer";  // Adjust the path as needed
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
  metadataBase: new URL("https://www.amontogirls.com"),
  title: {
    default: "Amonto Girls Academy - Premier Girls Boarding School in South Sudan",
    template: "%s | Amonto Girls Academy"
  },
  description: "Amonto Girls Academy is South Sudan's leading girls boarding school offering quality education, leadership development, and academic excellence in Juba. Ranked 10th nationally, #1 best girls school in Juba.",
  keywords: [
    "Amonto Girls Academy",
    "girls boarding school South Sudan",
    "quality education Juba",
    "South Sudan schools",
    "girls education",
    "leadership development",
    "boarding school Juba",
    "best girls school South Sudan",
    "CSE preparation",
    "academic excellence South Sudan"
  ],
  authors: [{ name: "Amonto Girls Academy" }],
  creator: "Amonto Girls Academy",
  publisher: "Amonto Girls Academy",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amontogirls.com",
    siteName: "Amonto Girls Academy",
    title: "Amonto Girls Academy - Empowering girl-child Through Education",
    description: "South Sudan's premier girls boarding school offering modern curriculum, excellent facilities, and holistic education in Juba. Ranked 10th nationally.",
    images: [
      {
        url: "/gallery/image (1).jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amonto Girls Academy - Premier Girls Education in South Sudan",
    description: "Transformative education for girls in South Sudan. Academic excellence, leadership development, and modern facilities.",
    images: ["/gallery/image (1).jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com",
  },
  category: "Education",
  classification: "Educational Institution",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
