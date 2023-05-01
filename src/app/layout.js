import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Designer and Fron-tend Developer from Sri Lanka",
  description:
    "Avidu is a creative website designer and front-end developer from sri lanka. Who works with medium size businesses to individuals to increase their online appearance and get more sales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
