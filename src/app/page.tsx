import Header from "@/components/header";
import FireflyEffect from "@/components/particles";
import SideBar from "@/components/sidebar";
import { Dice3, Martini, Popcorn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-darkpurple w-full text-whiteout">
      <div className="flex font-sans flex-col h-full items-center justify-center bg-darkpurple w-full text-whiteout">
        <FireflyEffect />
        <div className="font-sans text-sm tracking-[0.4em]">
          WELCOME TO
        </div>
        <h2 className="font-heading text-6xl bg-gradient-to-r from-lightpurple to-pink-700 text-transparent bg-clip-text">
          COCKTAIL
          {/* <Image src="/placeholder-user.jpg" alt="user" width={50} height={50} /> */}
        </h2>
        <div className="flex pt-1  ">
          <div className="bg-white w-3 h-7 text-sm px-16 rounded-lg">
            tbeaster
          </div>
          <div className="text-white pl-2  text-3xl rounded-lg tracking-[0.2em]">
            NIGHTOUT
          </div>
        </div>

        <div className="mt-[10vh] location text-md font-light text-center">
          <div className="text-lg font-display uppercase text-fuchsia-700"> Join Us </div>
          <div className="text-white text-sm uppercase"> Bar Opens At 8PM</div>
          <div className="text-white text-sm uppercase"> Klass Chill, Tarred Malingo , Buea</div>
        </div>

        <div className="mt-[10vh] location text-md font-light text-center">
          <div className="text-lg font-display uppercase text-fuchsia-700"> Whats On The Menu </div>
        </div>
        <div className="flex space-x-7">
          <div className="text-white text-sm uppercase flex">
            <div className=" border-2 rounded-lg border-lightpurple ">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
              >
                <Martini className="h-5 w-5" />
                <span className="sr-only">Cocktails</span>
              </Link>
            </div>
          </div>
          <div className="text-white text-sm uppercase flex">
            <div className=" border-2 rounded-lg border-lightpurple ">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
              >
                <Popcorn className="h-5 w-5" />
                <span className="sr-only">Small Chops</span>
              </Link>
            </div>
          </div>
          <div className="text-white text-sm uppercase flex">
            <div className=" border-2 rounded-lg border-lightpurple ">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
              >
                <Dice3 className="h-5 w-5" />
                <span className="sr-only">Cocktails</span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
