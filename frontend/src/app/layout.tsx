import { ThemeContextProvider } from "@/providers/ThemeContextProvider";

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
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
      <body className={font.className}>
        <ThemeContextProvider>
          <main className="content">{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
