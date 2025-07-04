import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const spaceMono = Space_Mono({
//   variable: "--font-space-mono",
//   subsets: ["latin"],
//   fontWeight: ["400", "700"],
// })

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
    default: "Cupcake's Blog(salt) 🧁",
    template: "%s | Cupcake's Blog(salt) 🧁",
  },
  description: "Unserious activities. 😛",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center  h-screen items-center`}
      >
        <div className="h-2/3 flex flex-col items-start max-w-[40ch]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
