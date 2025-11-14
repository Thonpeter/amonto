import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amonto Girls Academy - Our Mission & Leadership Team",
  description: "Learn about Amonto Girls Academy's mission, vision, leadership team, and our commitment to empowering young women in South Sudan through quality education.",
  keywords: [
    "about Amonto Girls Academy",
    "school mission",
    "leadership team",
    "South Sudan education",
    "girls empowerment",
    "school director",
    "head teacher"
  ],
  openGraph: {
    title: "About Amonto Girls Academy - Our Mission & Leadership Team",
    description: "Learn about Amonto Girls Academy's mission, vision, leadership team, and our commitment to empowering young women in South Sudan through quality education.",
    url: "https://www.amontogirls.com/about",
    images: [
      {
        url: "/facilities/director.jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amonto Girls Academy - Our Mission & Leadership Team",
    description: "Learn about Amonto Girls Academy's mission, vision, leadership team, and our commitment to empowering young women in South Sudan.",
    images: ["/facilities/director.jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

