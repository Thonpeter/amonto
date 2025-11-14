import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Excellence at Amonto Girls Academy - Top-Ranked School",
  description: "Discover our nationally recognized academic programs, student achievements, and comprehensive curriculum at Amonto Girls Academy in South Sudan. Ranked 10th nationally, 3rd position student achievement.",
  keywords: [
    "academics Amonto Girls",
    "curriculum South Sudan",
    "student achievements",
    "academic programs",
    "CSE preparation",
    "national ranking",
    "mathematics olympiad",
    "arts contest"
  ],
  openGraph: {
    title: "Academic Excellence at Amonto Girls Academy - Top-Ranked School",
    description: "Discover our nationally recognized academic programs, student achievements, and comprehensive curriculum. Ranked 10th nationally in South Sudan.",
    url: "https://www.amontogirls.com/academics",
    images: [
      {
        url: "/academics/classroom-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Academic Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Excellence at Amonto Girls Academy",
    description: "Nationally recognized academic programs and student achievements. Ranked 10th nationally in South Sudan.",
    images: ["/academics/classroom-hero.jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com/academics",
  },
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

