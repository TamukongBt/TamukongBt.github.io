"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Drawer,
    DrawerContent,
    DrawerClose,
} from '@/components/ui/drawer';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
import { PanelBottomCloseIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface SnackCardProps {
    id: string;
    name: string;
    image: string;
    details: string;
    plug: string;
}


const SnackCard: React.FC<SnackCardProps> = ({ id, name, image, details, plug }) => {
    const [isOpen, setIsOpen] = useState(false);
    // check screen size
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // split profile string to array and map through it to display each profile
    



    if (isDesktop) {
        return (
            <Dialog onOpenChange={handleOpen}>
                <DialogTrigger asChild>
                    <div onClick={handleOpen} key={id} className="w-[100%]">
                        <AspectRatio ratio={3 / 4}>
                            <Image src={image} alt={name} height={450} width={500} className=' !w-full !h-full rounded-md object-cover' />
                        </AspectRatio>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-darkpurple">
                    <DialogHeader>
                        <DialogDescription>
                            <div className="mt-3 px-2">
                                <DrawerClose onClick={handleClose} className="absolute top-0 right-0 text-2xl font-bold m-4 z-30 rounded-md  bg-darkpurple text-whiteout">
                                    {/* <PanelBottomCloseIcon className='w-[0.9em] text-whiteout' /> */}
                                </DrawerClose>
                                <AspectRatio ratio={16 / 9}>
                                    <Image src={image} alt={name} height={450} width={500} className=' !w-full !h-full object-top rounded-md object-cover' />
                                </AspectRatio>
                                <div className='text-whiteout'>
                                    <h2 className=" text-2xl font-bold my-2">{name}</h2>
                                    {/* <Separator /> */}
                                    <p className='mb-3'>{details}</p>
                                    <div className="italic mb-2 font-bold text-grey-400"> {plug} </div>
                                </div>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <>
            <div onClick={handleOpen} key={id} className="w-[100%]">
                <AspectRatio ratio={3 / 4}>
                    <Image src={image} alt={name} height={450} width={500} className=' !w-full !h-full rounded-md object-cover' />
                </AspectRatio>
            </div>
            <Drawer key={id} open={isOpen} onOpenChange={setIsOpen}>
                <DrawerContent className='mt-0 bg-darkpurple text-whiteout'>
                    <div className="mt-4 px-8">
                        <DrawerClose onClick={handleClose} className="absolute top-0 right-0 text-2xl font-bold m-4 z-30 rounded-lg p-2 bg-darkpurple text-whiteout">
                            <PanelBottomCloseIcon className='text-whiteout' />
                        </DrawerClose>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={image} alt={name} height={450} width={500} className=' !w-full !h-full rounded-md  object-top object-cover' />
                        </AspectRatio>
                        <div className='pb-8 text-whiteout'>
                            <h2 className=" text-2xl font-bold my-2">{name}</h2>
                            {/* <Separator /> */}
                            <p className='mb-3'>{details}</p>
                            <div className="italic mb-2 font-bold text-grey-400 text-sm"> {plug} </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
};




export default SnackCard;