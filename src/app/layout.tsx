import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "ui/custom/nav";
import { Toaster } from "ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Assignment",
  description: "Just a Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        <Nav />
        <Toaster expand richColors />
        <div className="container mx-auto px-6 py-20">{children}</div>
      </body>
    </html>
  );
}
