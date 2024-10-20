import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SchoolDetailsHead from "@/components/Navbar/SchoolDetailsHead";

const Montserrat = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Saraswati Secondary School",
  description:
    "Saraswati Secondary School is the well renowned school in Dolakha district.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Montserrat.variable} antialiased`}>
        <SchoolDetailsHead />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
