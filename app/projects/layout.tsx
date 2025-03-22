import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projects",
  description: "Noteworthy projects I've worked on or built",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" w-full   flex items-center">{children}</div>;
}
