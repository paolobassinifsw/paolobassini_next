/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/:locale(it|en)/:path*", destination: "/:path*" }],
    };
  },
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
};

export default nextConfig;
