import type { Metadata } from "next";
// import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header.component";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const getRoboto = Roboto({
//   variable: "--font-roboto",
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
