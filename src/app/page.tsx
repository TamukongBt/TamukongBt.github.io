"use client"
import { Button } from "@/components/ui/button";
import { Dice3, Martini, Popcorn } from "lucide-react";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-darkpurple w-full text-whiteout">
      <div className="flex font-sans flex-col h-full items-center justify-center bg-darkpurple w-full text-whiteout">
        <div className="font-sans text-sm tracking-[0.4em]">
          WELCOME TO
        </div>
        <h2 className="font-heading text-6xl bg-gradient-to-r from-lightpurple to-pink-700 text-transparent bg-clip-text">
          COCKTAIL
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
        <div className="text-md font-lighter text-center">

          <FlipClockCountdown
            to={new Date('2024-06-08T20:00:00')}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            labelStyle={{ fontSize: 20, fontWeight: 500, textTransform: 'uppercase' }}
            digitBlockStyle={{ width: 30, height: 60, fontSize: 40, fontWeight: 500 }}
            dividerStyle={{ color: 'white', height: 1 }}
            separatorStyle={{ color: 'white', size: '6px' }}
            duration={0.5}
            title="Countdown"
            className="text-neonpurple sm:text-sm lg:text-lg uppercase !font-display my-8 border border-neonpurple p-5  rounded-md"
          >
            <Link href="/new-player">
              <Button className="font-display bg-lightpurple border uppercase text-2xl tracking-widest  hover:bg-purple-800 my-3 text-white hover:text-black border-white hover:border-black mt-5 py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Let's Begin
              </Button>
            </Link>
          </FlipClockCountdown>

        </div>

        <div className="mt-[5vh] location text-md font-light text-center">
          <div className="text-lg font-display uppercase text-fuchsia-700"> Whats On The Menu </div>
        </div>
        <div className="flex space-x-7">
          <div className="text-white text-sm uppercase flex">
            <div className=" border-2 rounded-lg border-lightpurple ">
              <Link
                href="/cocktail"
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
                href="/chops"
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
                href="/games"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
              >
                <Dice3 className="h-5 w-5" />
                <span className="sr-only">Games</span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
