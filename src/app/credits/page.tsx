import React from 'react';
import { Instagram, Mail, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';

const Credits = () => {
    return (
        <div className="flex items-center border border-lemonchiffon h-full justify-center text-lemonchiffon dark:text-lemonchiffon">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 uppercase font-heading">Credits</h2>
                <p className="text-[0.7em] lowercase  ">App Built by:</p>
                <ul className="text-2xl uppercase text-light mb-3 list-inside list-none">
                    <li className='font-light font-display'>Tamukong Brian</li>
                </ul>
                <p className="text-[0.7em] lowercase">Creative Advice:</p>
                <ul className="text-md list-inside list-none">
                    <li className='uppercase font-display text-lg'> Tamukong Brian </li>
                </ul>
                
                <p className="text-[0.7em] mt-4 uppercase font-light ">Thanks for Viewing <br /> All Rights Reserved  {new Date().getFullYear()}</p>
                <p className="text-[0.7em] mt-4 uppercase font-light ">Contact Us Now</p>


                <div className="flex justify-center space-x-4 my-2 text-gray-600 ">
                    <Link href="#" className="text-2xl">
                        <Instagram className="text-2xl" />
                    </Link>
                    <Link href="https://wa.me/651076194" className="text-2xl">
                        <MessageCircleMore className="text-2xl" />
                    </Link>
                    <Link href="mailto:briantbrian4@gmail.com" className="text-2xl">
                        <Mail className="text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Credits;