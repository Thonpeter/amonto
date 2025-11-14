import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Amonto Girls Academy - Visit Our Campus in Juba",
  description: "Get in touch with Amonto Girls Academy. Schedule campus tours, inquire about admissions, and visit our Jebel Amianin campus in Juba, South Sudan.",
  keywords: [
    "contact Amonto Girls",
    "campus visit",
    "school location Juba",
    "phone number",
    "email address",
    "Jebel Amianin",
    "campus tour"
  ],
  openGraph: {
    title: "Contact Amonto Girls Academy - Visit Our Campus in Juba",
    description: "Get in touch with Amonto Girls Academy. Schedule campus tours, inquire about admissions, and visit our Jebel Amianin campus in Juba, South Sudan.",
    url: "https://www.amontogirls.com/contact",
    images: [
      {
        url: "/facilities/boarding.jpg",
        width: 1200,
        height: 630,
        alt: "Amonto Girls Academy Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Amonto Girls Academy",
    description: "Get in touch with South Sudan's premier girls boarding school. Schedule campus tours and visit our Juba campus.",
    images: ["/facilities/boarding.jpg"],
  },
  alternates: {
    canonical: "https://www.amontogirls.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

