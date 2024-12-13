import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 其他配置选项
  images: {
    domains: ["aceternity.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
