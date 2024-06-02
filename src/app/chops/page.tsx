// pages/index.tsx or any other page/component
import React from 'react';

import SnackCard from '@/components/snack-card';

const snacks = [
    {
        id: '1',
        name: 'Meat Pies',
        image: '/meatpies.jpg',
        details: 'A savory pastry filled with seasoned ground beef and vegetables.',
        plug: 'CK Cakes: 651076194'
    },
    {
        id: '2',
        name: 'Cakes',
        image: '/cakes.jpeg',
        details: 'A sweet treat made with flour, sugar, and butter, and baked in an oven.',
        plug: 'TB Cakes: 651076194'
    },
    {
        id: '3',
        name: 'Popcorn',
        image: '/popcorn.jpg',
        details: 'A light and fluffy snack made from corn kernels that are heated until they burst open.',
        plug: 'TB Cakes: 651076194'
    },
    {
        id: '4',
        name: 'Chin Chin',
        image: '/chinchin.webp',
        details: 'A sweet, crunchy snack made from flour, sugar, and butter, and deep-fried until golden brown.',
        plug: 'TB Cakes: 651076194'
    },
    {
        id: '4',
        name: 'Groundnuts',
        image: '/gnuts.webp',
        details: 'A crunchy snack made from roasted peanuts that are seasoned with salt and spices.',
        plug: 'TB Cakes: 651076194'
    }

    // Add more snacks as needed
];

const Snacks = () => {
    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {snacks.map((snack) => (
                    <SnackCard
                        key={snack.id}
                        id={snack.id}
                        name={snack.name}
                        image={snack.image}
                        details={snack.details}
                        plug={snack.plug}
                    />
                ))}
            </div>
        </div>
    );
};

export default Snacks;
