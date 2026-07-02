import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// React Spectrum packages ship CSS that needs transpiling in Next.js.
function scopedPackages(scope: string): string[] {
  const dir = path.join(process.cwd(), "node_modules", scope);
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => !name.startsWith("."))
      .map((name) => `${scope}/${name}`);
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  transpilePackages: [
    "@adobe/react-spectrum",
    ...scopedPackages("@react-spectrum"),
    ...scopedPackages("@spectrum-icons"),
  ],
};

export default nextConfig;
