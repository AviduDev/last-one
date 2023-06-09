import "./globals.css";

import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Designer and Fron-tend Developer from Sri Lanka",
  description:
    "Avidu is a creative website designer and front-end developer from sri lanka. Who works with medium size businesses to individuals to increase their online appearance and get more sales.",
  keywords: [
    "Web Design",
    "Web Development",
    "Frontend",
    "NextJs",
    "Avidu",
    "Design",
  ],
  creator: "Avidu Sampath",
  publisher: "Avidu Sampath",
  siteName: "Avidu",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Script src="//code.jquery.com/jquery.min.js" />
        <Script src="dist/descrambler.min.js" />
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
