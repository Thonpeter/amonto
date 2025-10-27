'use client';

import Head from 'next/head';

export default function SEOHead({
    title = "Amonto Girls Academy - Premier Girls Boarding School in South Sudan",
    description = "Amonto Girls Academy is South Sudan's leading girls boarding school offering quality education and leadership development.",
    keywords = "Amonto Girls Academy, girls boarding school South Sudan, education Juba",
    canonicalUrl = "https://www.amontogirls.com",
    ogImage = "/gallery/image (1).jpg"
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Amonto Girls Academy" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Amonto Girls Academy" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="general" />
            <meta name="distribution" content="global" />
        </Head>
    );
}