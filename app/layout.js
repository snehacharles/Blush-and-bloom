

import "./globals.css";
import { Syne, Albert_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata = {
  title: "Blush & Bloom | Premium Beauty Salon",
  description:
    "Discover beauty, elegance and confidence at Blush & Bloom Beauty Salon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${albertSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
