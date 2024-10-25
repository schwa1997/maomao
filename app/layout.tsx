import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "maomao",
  description: "maomao",
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
        <header className="bg-purple-600 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">林毛毛语录</h1>
            <nav className="flex items-center">
              <Link href="/" className="mr-4 hover:text-purple-200 transition duration-300">
                主页
              </Link>
              <Link href="/maomao" className="mr-4 hover:text-purple-200 transition duration-300">
                毛毛语录
              </Link>
              <Link href="/blogs" className="mr-4 hover:text-purple-200 transition duration-300">
                博客
              </Link>
              <Link href="/coding" className="mr-4 hover:text-purple-200 transition duration-300">
                编程教程
              </Link>
              <Link href="/wo" className="mr-4 hover:text-purple-200 transition duration-300">
                关于我 
              </Link>
              <Link href="/communities" className="hover:text-purple-200 transition duration-300">
                其他社群 
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
