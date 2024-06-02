// pages/index.tsx or any other page/component
import React from 'react';

import CocktailCard from '@/components/cocktail-card';
import { profile } from 'console';

const cocktails = [
    {
        id: '1',
        name: 'Margarita',
        image: 'https://www.liquor.com/thmb/JQgDGy26Zsw-_cFGKH4zNH9PlXk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Frozen-Margarita-1500x1500-hero-191e49b3ab4f4781b93f3cfacac25136.jpg',
        details: 'A refreshing cocktail made with tequila, lime juice, and orange liqueur.',
        profile: 'sweet and sour'
    },
    {
        id: '2',
        name: 'Mojito',
        image: 'https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg',
        details: 'A Cuban classic made with rum, lime, mint, and soda water.',
        profile: 'sweet,sour,minty'
    },
    {
        id: '3',
        name: 'Matango And Highlife',
        image: 'https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg',
        details: 'A Cuban classic made with rum, lime, mint, and soda water.',
        profile: 'sweet,sour,boozy,bubbly'
    },
    // Add more cocktails as needed
];

const Cocktails = () => {
    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {cocktails.map((cocktail) => (
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
