/** @type {import('next').NextConfig} */

const nextConfig = {

    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            frameSrc: ["https://poocoin.app"],
        },
    }

};

export default nextConfig;
