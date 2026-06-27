import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dev: {
      disableRouteOverlay: true,
    },
  } as any,
};

export default nextConfig;
