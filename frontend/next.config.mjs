/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN, 'via.placeholder.com'].filter(
      (domain) => typeof domain === 'string' && domain.length > 0,
    ),
  },
}

export default nextConfig
