"use client"
import React, { useEffect, useState } from 'react';

import CocktailCard from '@/components/cocktail-card';




const Cocktails = () => {
    const [cocktails, setCocktail] = useState([]);

    useEffect(() => {
        fetch('/cocktail-list.json')
            .then(response => response.json())
            .then(cocktail => setCocktail(cocktail));
    }, []);

    if (cocktails.length === 0) {
        return (
            <div className="font-sans uppercase tracking-wider text-whiteout text-center mt-4 w-full p-5">
                No cocktails available
            </div>
        );
    }
    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">

                {cocktails.map((cocktail:any) => (
                    <CocktailCard
                        key={cocktail.id}
                        id={cocktail.id}
                        name={cocktail.name}
                        image={cocktail.image}
                        details={cocktail.details}
                        profile={cocktail.profile}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cocktails;
