import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Fahreza Pratama Hidayat | Software Engineering Student ITG",
        template: "%s | Fahreza Pratama Hidayat",
    },
    description:
        "Fahreza Pratama Hidayat - Software Engineering student at Institut Teknologi Garut (ITG). Passionate about web development, software design, programming, and database systems. NIM: 2206144",
    keywords: [
        "Fahreza Pratama Hidayat",
        "Software Engineering ITG",
        "Institut Teknologi Garut",
        "Mahasiswa ITG",
        "Student Portfolio Indonesia",
        "Web Development Student",
        "Programming Student",
        "Software Design",
        "Database Systems",
        "NIM 2206144",
        "Garut",
        "Indonesia",
    ],
    authors: [
        { name: "Fahreza Pratama Hidayat", url: "https://fahreza-dev.web.id" },
    ],
    creator: "Fahreza Pratama Hidayat",
    publisher: "Fahreza Pratama Hidayat",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://fahreza-dev.web.id"),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US",
            "id-ID": "/id-ID",
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://fahreza-dev.web.id",
        title: "Fahreza Pratama Hidayat - Software Engineering Student",
        description:
            "Software Engineering student at Institut Teknologi Garut passionate about web development and programming",
        siteName: "Fahreza Pratama Hidayat Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Fahreza Pratama Hidayat - Software Engineering Student",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fahreza Pratama Hidayat - Software Engineering Student",
        description:
            "Software Engineering student at Institut Teknologi Garut passionate about web development and programming",
        images: ["/og-image.jpg"],
        creator: "@fahreza_pratama",
        site: "@fahreza_pratama",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    colorScheme: "dark light",
    category: "portfolio",
    classification: "Personal Portfolio",
    referrer: "origin-when-cross-origin",
    bookmarks: ["https://fahreza-dev.web.id"],
    applicationName: "Fahreza Pratama Hidayat Portfolio",
    generator: "Next.js",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/apple-touch-icon-precomposed.png",
        },
    },
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
        yahoo: "yahoo-site-verification-code",
        other: {
            me: [
                "mailto:fahreza@example.com",
                "https://github.com/fahrezapratamahidayat",
            ],
        },
    },
    appleWebApp: {
        title: "Fahreza Portfolio",
        statusBarStyle: "black-translucent",
        capable: true,
    },
    other: {
        "msapplication-TileColor": "#000000",
        "msapplication-config": "/browserconfig.xml",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
