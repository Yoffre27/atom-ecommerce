import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProviderWrapper from '@/components/Dark/theme-provider';

import LeftSideBar from "@/components/Navbar/LeftSideBar";
import TopBar from "@/components/Navbar/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <div className="flex max-lg:flex-col text-grey-1">
          <ThemeProviderWrapper>
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">{children}</div>
            </ThemeProviderWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
