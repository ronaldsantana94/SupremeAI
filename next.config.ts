import '@/lib/env';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/logout",
        destination: "/landing", // ✅ Redirect logged-out users to landing page
        permanent: false,
      },
    ];
  },
};

export default nextConfig;