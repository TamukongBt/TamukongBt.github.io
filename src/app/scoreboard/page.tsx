"use client"
import { gql, useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const GET_GAMES = gql`
query Games {
    games {
        group {
          name
        }
        points
      }
      groups {
        name
        id
      }
  }
`;

const UPDATE_POINTS = gql`
  mutation UpdatePoints($groupId: ID!, $points: Int!) {
    createGame(groupId: $groupId, points: $points) {
      id
      points
    }
  }
`;

export default function Scoreboard() {
    const { loading, error, data, refetch } = useQuery(GET_GAMES);
    const [updatePoints] = useMutation(UPDATE_POINTS);
    const [points, setPoint] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState<null | string>(null);
    const [inputValue, setInputValue] = useState(0);

    const handleUpdatePoints = async () => {
        if (selectedGroup === null) {
            toast({
                title: 'Please select a group'
            });
            return;
        }
        if (inputValue === 0) {
            toast({
                title: 'Honestly what do you want to give'
            });
            return;

        }
        var points = inputValue;
        setPoint(inputValue);
        await new Promise(resolve => setTimeout(resolve, 0));
        updatePoints({ variables: { groupId: selectedGroup, points } });
        setPoint(0);
        refetch()
    };

    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const scores = data.games.reduce((acc: { [key: string]: { points: number[], total: number } }, game: { group: { name: string }, points: number }) => {
        const { group, points } = game;
        if (!acc[group.name]) {
            acc[group.name] = { points: [], total: 0 };
        }
        acc[group.name].points.push(points);
        acc[group.name].total += points;
        return acc;
    }, {});
    const mappedScores = data.groups.map((group: { name: string }) => {
        const score = scores[group.name];
        if (score) {
            return { group: group.name, points: score.points, total: score.total };
        } else {
            return { group: group.name, points: [], total: 0 };
        }
    });
   
    // console.log(group)
    return (
        <div className='container !text-white w-full sm:pt-3 md:pt-8 '>
            <h1 className='font-display text-center uppecase tracking-wider text-4xl text-neonpurple'>Scoreboard</h1>

            <div className="grid md:!grid-cols-4  sm:!grid-cols-1  md:space-x-2 md:space-y-0 sm:space-x-0 sm:space-y-2  ">
                {Object.entries(mappedScores).map(([groupId, score]) => (
                    <div className='border border-neonpurple rounded-md !my-2 md:!my-none text-center p-5' key={groupId}>
                        <div className="text-[0.5em] uppercase text-center tracking-[0.7em] font-sans">Score</div>
                        <div className=' font-display bg-gradient-to-r from-lightpurple to-pink-700 text-transparent bg-clip-text text-6xl sm:text-4xl'> {score.total}</div>
                        <div className="text-[0.6em] tracking-widest uppercase font-sans">Group</div>
                        <h2 className='font-heading text-2xl uppercase bg-gradient-to-r from-pink-400 to-purple-200 text-transparent bg-clip-text'>{score.group}</h2>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex flex-col mb-4">
                    <div className="flex">

                        <Input
                            placeholder="Enter Team Points"
                            type="number"
                            value={inputValue}
                            onChange={(e) => setInputValue(Number(e.target.value))}
                            key={selectedGroup} 
                            className="shadow-sm rounded-md border border-gray-300 px-3  bg-darkpurple py-2 focus:outline-none focus:ring focus:ring-blue-500  rounded-l-none focus:ring-opacity-10"
                        />
                    </div>
                    <Button
                        className="bg-lightpurple border hover:bg-purple-800 my-3 text-white hover:text-black border-white hover:border-black font-bold py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        onClick={ handleUpdatePoints}>Update Points

                    </Button>
                </div>


            </div>
        </div>
    );
}