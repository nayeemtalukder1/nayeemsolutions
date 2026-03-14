import type { Metadata } from "next";
import { Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Primary Font: Modern and Professional
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

// Secondary Font: Clean and Readable
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NayeemSolutions | WordPress Developer & Digital Strategist",
  description: "High-converting WordPress websites and digital growth strategies engineered to scale your business.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: ["WordPress Developer", "Web Design Bangladesh", "NayeemSolutions"],
  authors: [{ name: "Nayeem Talukder" }],
  openGraph: {
    title: "NayeemSolutions | Premium Web Development",
    description: "I build high-quality WordPress websites optimized for performance and conversions.",
    url: "https://solutions.nayeemtalukder.com",
    siteName: "NayeemSolutions",
    images: [
      {
        url: "/nayeem.png", // Create a 1200x630 image for social sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${plusJakartaSans.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className={`${plusJakartaSans.className} antialiased bg-[#0a0a0a]`}>
        {/* Note: Navbar is usually handled inside page.tsx or here. 
            If you put it here, it stays fixed across all pages. 
        */}
        {children}
      </body>
    </html>
  );
}