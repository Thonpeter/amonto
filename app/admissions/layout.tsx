import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions - Join Amonto Girls Academy in South Sudan",
  description: "Apply to Amonto Girls Academy. Learn about our admission process, requirements, facilities, and boarding life for Forms 1-4 students. Year-round admissions open.",
  keywords: [
    "admissions Amonto Girls",
    "apply now",
    "school enrollment",
    "boarding school South Sudan",
    "admission process",
    "Forms 1-4",
    "campus tour"
  ],
  openGraph: {
    title: "Admissions - Join Amonto Girls Academy in South Sudan",
    description: "Apply to Amonto Girls Academy. Learn about our admission process, requirements, facilities, and boarding life for Forms 1-4 students.",
    url: "https://www.amontogirls.com/admissions",
    images: [
      {
        url: "/admissions/campus-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Campus Entrance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions - Join Amonto Girls Academy",
    description: "Apply to South Sudan's premier girls boarding school. Year-round admissions open for Forms 1-4.",
    images: ["/admissions/campus-entrance.jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com/admissions",
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

