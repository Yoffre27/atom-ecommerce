import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import ThemeProviderWrapper from '@/components/Dark/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ClerkProvider>
          <ThemeProviderWrapper>
            <ToasterProvider />

            <Navbar />
            {children}
          </ThemeProviderWrapper>
        </ClerkProvider>

      </body>
    </html>
  );
}
