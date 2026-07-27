import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Diamond Snooker Lounge | Premium Gaming & Snooker in Multan",
    template: "%s | Diamond Snooker Lounge"
  },
  description: "Experience Multan's premier hangout destination for gamers and cueists. Diamond Snooker Lounge offers world-class heated slate tables, next-gen PS5 gaming, and exclusive 24/7 VIP private rooms.",
  keywords: ["Snooker", "Diamond Snooker Lounge", "Snooker Club Multan", "PS5 Gaming", "VIP Lounge", "Billiards", "Pool Tables Multan", "Gaming Zone", "Shah Rukn E Alam"],
  authors: [{ name: "Diamond Snooker Lounge" }],
  creator: "Diamond Snooker Lounge",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://diamondsnookerlounge.com",
    title: "Diamond Snooker Lounge | Premium Gaming in Multan",
    description: "Experience Multan's premier hangout destination for gamers and cueists. Diamond Snooker Lounge offers world-class heated slate tables, next-gen PS5 gaming, and exclusive 24/7 VIP private rooms.",
    siteName: "Diamond Snooker Lounge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Snooker Lounge | Premium Gaming in Multan",
    description: "Experience Multan's premier hangout destination for gamers and cueists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
