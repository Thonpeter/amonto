import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amonto Girls Academy - Premier Girls Boarding School in South Sudan',
    short_name: 'Amonto Girls',
    description: 'South Sudan\'s leading girls boarding school offering quality education, leadership development, and academic excellence in Juba.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1b4b',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

