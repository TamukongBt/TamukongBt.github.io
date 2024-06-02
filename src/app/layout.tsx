import type { Metadata } from "next";
import { Source_Sans_3, Bebas_Neue, Monoton } from "next/font/google";

import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import FireflyEffect from "@/components/particles";
import BottomMenubar from "@/components/bottom-menubar";

const josefins = Source_Sans_3({ subsets: ["latin"] });


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
      <body className={josefins.className}>
        <main className="flex min-h-screen w-full  bg-darkpurple ">
          <div className="md:w-[7%] lg:w-[4%] sm:hidden md:block ">
            <BottomMenubar />
            <SideBar />
          </div>
          <div className=" bg-brownpurple w-full !h-full  ">
            <Header />
            {children}

          </div>
        </main>
      </body>
    </html>
  );
}
