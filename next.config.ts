import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ["react-icons"],
    },
    async headers() {
        return [
            {
                // Gallery media (screenshots, posters, loops) is content addressed by name
                // and replaced rather than mutated, so it can be cached indefinitely.
                source: "/Gallery/:path*",
                headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
            },
        ];
    },
};

export default nextConfig;
