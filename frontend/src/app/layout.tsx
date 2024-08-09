import { ThemeProvider } from "@/providers/ThemeProvider";

import Sidebar from "@/layouts/Sidebar";
import Topbar from "@/layouts/Topbar";

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "normalize.css";
import "./globals.css";

const font = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Just another sleek admin dashboard project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="content flex-1 mx-6 my-4">
            <Topbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
