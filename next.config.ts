import type { NextConfig } from "next";
import dotenv from 'dotenv';
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_DATABASE_URL: process.env.NETLIFY_DATABASE_URL,
  },
};

export default nextConfig;
