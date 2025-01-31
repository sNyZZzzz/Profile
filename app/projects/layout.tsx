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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex items-center bg-background w-full  max-w-3xl bg-green-200 ">
            <div className="w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
