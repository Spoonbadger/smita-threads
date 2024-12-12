import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/ui/globals.css"
import Navbar from '@/ui/home/navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smita",
  description: "Smita threads fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}