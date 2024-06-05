"use client"
import React, { useEffect, useState } from 'react';
import SnackCard from '@/components/snack-card';



const Snacks = () => {
    const [chops, setChop] = useState([]);

    useEffect(() => {
        fetch('/chops-list.json')
            .then(response => response.json())
            .then(chop => setChop(chop));
    }, []);

    if (chops.length === 0) {
        return (
            <div className="font-sans uppercase tracking-wider text-whiteout text-center mt-4 w-full p-5">
                No chops available
            </div>
        );
    }

    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {chops.map((chop:any) => (
                    <SnackCard
                        key={chop.id}
                        id={chop.id}
                        name={chop.name}
                        image={chop.image}
                        details={chop.details}
                        plug={chop.plug}
                    />
                ))}
            </div>
        </div>
    );
};

export default Snacks;
