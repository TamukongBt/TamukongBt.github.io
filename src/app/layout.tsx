import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { ApolloWrapper } from "./wrapper";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import BottomMenubar from "@/components/bottom-menubar";
import { Toaster } from "@/components/ui/toaster";

const josefins = Source_Sans_3({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "THE NIGHTOUT APP",
  description: "See Our Servings and Join Us for a Nightout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Monoton&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"/>
            </head>
            <body className={josefins.className}>
              <ApolloWrapper>
                <main className="flex min-h-screen w-full  bg-darkpurple ">
                  <div className="md:w-[7%] lg:w-[4%] sm:hidden md:block ">
                    <BottomMenubar />
                    <SideBar />
                  </div>
                  <div className=" bg-brownpurple w-full !h-full  ">
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
