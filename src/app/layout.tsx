import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { ApolloWrapper } from "./wrapper";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";




export const metadata: Metadata = {
  title: "Tamukong Brian",
  description: "Lets get to know each other",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Monoton&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&family=Chokokutai&family=Dancing+Script:wght@400..700&family=Figtree:ital,wght@0,300..900;1,300..900&family=League+Spartan:wght@100..900&family=Monoton&family=Mynerve&family=Passion+One:wght@400;700;900&family=Pirata+One&family=Prata&family=Tiny5&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Yanone+Kaffeesatz:wght@200..700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Doto:wght@100..900&family=Mrs+Saint+Delafield&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-sans ">
        <ApolloWrapper>
          <main className="flex !h-[100vh] overflow-y-hidden w-full bg-eerieblack p-2  ">
            {/* <div className="absolute bottom-0 right-12 z-5 font-bold text-[12em]  text-lemonchiffonlight blend">Tamukong</div> */}
            {/* <div className="absolute right-8 font-bold text-[15em] text-lemonchiffonlight">T.</div> */}
            <div className=" sm:hidden md:block">
              {/* <BottomMenubar /> */}
              <SideBar />
            </div>
            <div className="   w-full  bg-eerieblack ">
              <Header />
              {children}
              <Toaster />
              {/* <FireflyEffect /> */}
            </div>
          </main>
        </ApolloWrapper>
      </body>
    </html>

  );
}
