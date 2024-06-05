"use client"
import React, { useEffect, useState } from 'react';

import GameCard from '@/components/game-card';

const games = [
    
];

const Games = () => {
    const [games, setGame] = useState([]);

    useEffect(() => {
        fetch('/games-list.json')
            .then(response => response.json())
            .then(game => setGame(game));
    }, []);

    if (games.length === 0) {
        return (
            <div className="font-sans uppercase tracking-wider text-whiteout text-center mt-4 w-full p-5">
                No games available
            </div>
        );
    }
    return (
        <div className="font-body text-whiteout w-full p-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {games.map((game:any) => (
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
