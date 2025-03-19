/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
            },
            {
                protocol: 'https',
                hostname: 'w7.pngwing.com',
            },
            {
                protocol: 'https',
                hostname: 'themes.envytheme.com',
            }
        ]
    }
};

export default nextConfig;
