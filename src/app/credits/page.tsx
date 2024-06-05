import React from 'react';
import { Instagram, Mail, MessageCircleMore,  X } from 'lucide-react';
import Link from 'next/link';

const Credits = () => {
    return (
        <div className="flex items-center justify-center text-gray-300 h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 uppercase">Credits</h2>
                <p className="text-[0.7em] lowercase  ">App Built by:</p>
                <ul className="text-2xl uppercase text-light mb-3 list-inside list-none">
                    <li className='font-light font-display'>Tamukong Brian</li>
                </ul>
                <p className="text-[0.7em] lowercase">Creative Advice:</p>
                <ul className="text-md list-inside list-none">
                    <li className='uppercase font-display text-lg'>Ngenwie Emilia T. & Fobellah Blessing </li>
                </ul>
                <p className="text-[0.5em] mt-4 uppercase tracking-widest">For the event:</p>
                <p className="font-sans font-bold text-lg bg-gradient-to-r from-lightpurple to-pink-700 text-transparent bg-clip-text">COCKTAIL NIGHT OUT</p>

                <p className="text-[0.7em] mt-4 uppercase font-light ">Thanks for using the app <br /> All Rights Reserved  {new Date().getFullYear()}</p>
                <p className="text-[0.7em] mt-4 uppercase font-light ">Contact Us Now</p>


                <div className="flex justify-center space-x-4 my-2 text-gray-600 ">
                    <Link href="/instagram" className="text-2xl">
                        <Instagram className="text-2xl" />
                    </Link>
                    <Link href="https://www.whatsapp.com" className="text-2xl">
                        <MessageCircleMore className="text-2xl" />
                    </Link>
                    <Link href="https://www.whatsapp.com" className="text-2xl">
                        <Mail className="text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Credits;