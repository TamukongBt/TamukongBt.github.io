// pages/index.tsx or any other page/component
import React from 'react';

import GameCard from '@/components/game-card';

const games = [
    {
        id: '1',
        name: 'karaoke',
        image: '/karaoke.jpg',
        rules: 'You take the Mic and You sing like you love it its that simple',
        points: 'Your points are based on how well you sing'
    },
    {
        id: '2',
        name: 'Cards Against Humanity',
        image: '/cahumanity.jpg',
        rules: 'You take the floor and you dance like you love it its that simple',
        points: 'Just do what it says or pay 500'
    }
    
    // Add more games as needed
];

const Games = () => {
    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        image={game.image}
                        rules={game.rules}
                        points={game.points}
                    />
                ))}
            </div>
        </div>
    );
};

export default Games;
