import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";

export const metadata = {
  title: "Kishan Kareliya",
  description:
    "Portfolio of Kishan Kareliya, a full-stack developer skilled in React, Node.js, and modern web technologies.",
  keywords:
    "Kishan Kareliya, full stack developer, mern stack, react, nodejs, software engineer, backend, frontend, portfolio",
  openGraph: {
    title: "Kishan Kareliya Portfolio",
    description: "Explore Kishan’s MERN stack projects and contact info.",
    url: "https://kishankareliya.vercel.app",
    siteName: "Kishan Portfolio",
    images: [
      {
        url: "https://kishankareliya.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Kishan Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Kareliya Portfolio",
    creator: "@kishann__12",
    images: ["https://kishankareliya.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          id="ld-json"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kishan Kareliya",
            url: "https://kishankareliya.vercel.app",
            sameAs: [
              "https://github.com/kishan-kareliya",
              "https://linkedin.com/in/kishan-kareliya",
              "https://x.com/kishann__12",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          })}
        </Script>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
