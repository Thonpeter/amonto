import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships - Amonto Girls Academy Financial Aid Programs",
  description: "Apply for scholarships at Amonto Girls Academy. Full tuition coverage, boarding facilities, and mentorship programs for eligible South Sudanese girls. PLE scores 4, 5, or 6 eligible.",
  keywords: [
    "scholarships Amonto Girls",
    "financial aid",
    "tuition coverage",
    "South Sudan scholarships",
    "girls education funding",
    "PLE scholarship",
    "secondary school scholarships"
  ],
  openGraph: {
    title: "Scholarships - Amonto Girls Academy Financial Aid Programs",
    description: "Apply for scholarships at Amonto Girls Academy. Full tuition coverage, boarding facilities, and mentorship programs for eligible South Sudanese girls.",
    url: "https://www.amontogirls.com/scholarships",
    images: [
      {
        url: "/gallery/image (8).jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Scholarships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarships - Amonto Girls Academy",
    description: "Full tuition coverage scholarships for eligible South Sudanese girls. PLE scores 4, 5, or 6 eligible.",
    images: ["/gallery/image (8).jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com/scholarships",
  },
};

export default function ScholarshipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

