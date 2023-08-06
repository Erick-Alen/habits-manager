import "./globals.css";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import { TaskAlt } from "@mui/icons-material";

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Daily goal - Habits Manager",
  description: "Manage your habits with",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dosis.variable} ${inter.variable} flex items-center flex-col mt-10 bg-neutral-900 text-white`}
      >
        <div className="flex flex-row justify-center items-center gap-3 font-bold text-4xl font-sans">
          <Image
            src="/favicon.ico"
            // className="bg-white"
            alt="teste"
            width={100}
            height={100}
          />
          <h2>Habits Manager</h2>
        </div>
        {children}
      </body>
    </html>
  );
}
