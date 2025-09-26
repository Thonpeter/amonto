/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  experimental: {
    turbo: {
      rules: {
        // Add this if you're using Turbopack
        '*.css': {
          loaders: ['postcss-loader'],
        },
      },
    },
  },
};

export default config;
