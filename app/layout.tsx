import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Ali Ardiyansyah | Web Developer",
  description: "Portfolio website of Ali Ardiyansyah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${space.variable} antialiased font-space`}>
        {children}
      </body>
    </html>
  );
}
