import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Website Portofolio",
  description:
    "Welcome to my corner of the web! Dive into my portfolio where creativity meets code. Explore a collection of beautifully crafted websites, interactive web applications, and user-friendly interfaces. With a passion for front-end development, I bring designs to life and create seamless digital experiences that leave a lasting impression. Let's embark on a journey through innovation and creativity together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
