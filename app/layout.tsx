import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.mkdynamics.be/"),
    title: "MKDynamics - Information Technology Solutions",
    description:
    "Innovative IT company offering software development and cybersecurity to support your digital transformation towards a connected world.",
    generator: "Next.js",
    applicationName: "MKDynamics",
    keywords: [
        "IT services",
        "Software development",
        "Cybersecurity solutions",
        "Digital transformation",
        "Custom software solutions",
        "Web development",
        "Mobile app development",
        "Cloud computing",
        "Enterprise software",
        "Digital security",
        "Tech innovation",
        "IT consulting",
        "Business IT solutions",
        "Software engineering",
        "Full-stack development",
        "App development",
        "Technology solutions",
        "System integration",
        "Digital strategy",
        "Business technology services",
    ],
    openGraph: {
        title: "MKDynamics - Information Technology Solutions",
        description:
      "Innovative IT company offering software development and cybersecurity to support your digital transformation towards a connected world.",
        url: "https://www.mkdynamics.be/",
        siteName: "www.mkdynamics.be",
        images: [
            {
                url: "./public/logo.png",
                width: 1200,
                height: 630,
                alt: "MKDynamics - Information Technology Solutions",
            },
        ],
        locale: "en-GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MKDynamics - Information Technology Solutions",
        description:
      "Innovative IT company offering software development and cybersecurity to support your digital transformation towards a connected world.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en-GB">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
