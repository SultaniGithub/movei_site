import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "./provider";
import NavBar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Site",
  description: "You can get info about your favorate movies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body className={inter.className }>
      <Provider>
        <Header/>
        <NavBar/>
        <SearchBox/>
        {children}
        </Provider>
      </body>
    </html>
  );
}
