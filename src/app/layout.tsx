import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import {ApolloWrapper} from "./wrapper";
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
              <Toaster/>
              {/* <FireflyEffect /> */}
            </div>
          </main>
        </ApolloWrapper>
      </body>
    </html>

  );
}
