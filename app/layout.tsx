import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import { Signature } from "@/components/signature";

export const metadata: Metadata = {
  title: "harry",
  description: "for harry, by harry",
};

const openRunde = localFont({
  src: [
    { path: './fonts/OpenRunde-Regular.woff2', weight: '400' },
    { path: './fonts/OpenRunde-Medium.woff2', weight: '500' },
    { path: './fonts/OpenRunde-SemiBold.woff2', weight: '600' },
    { path: './fonts/OpenRunde-Bold.woff2', weight: '700' },
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={`min-h-svh flex flex-col font-medium text-lg ${openRunde.className}`}>{children}</body>
    </html>
  );
}
