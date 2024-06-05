"use client"
import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import { Dice3, Martini, Popcorn } from 'lucide-react';
import Link from 'next/link';


const GET_PLAYER_GROUP = gql`
  query GetPlayerGroup($id: ID!) {
    player(id: $id) {
      id
      name
     group{
      name
     }
    }
  }
`;

// const GET_PLAYER = gql`
//   query getPlayers {
//     players {
//       id
//       name
//       group {
//         name
//       }
//     }
//   }
// `;

const CREATE_PLAYER = gql`
  mutation createPlayer($name: String!) {
    createPlayer(name: $name) {
      id
      name
    }
  }
`;



export default function Group() {
  const [playerName, setPlayerName] = useState('');
  const [groupName, setGroupName] = useState('');
  const { toast } = useToast()
  const [playerId, setPlayerId] = useState(0)
  const { loading, error, data, refetch } = useQuery(GET_PLAYER_GROUP, {
    variables: { id: playerId },
    skip: !playerId, // Skip query if playerId is not set
  });

  const [createPlayer] = useMutation(CREATE_PLAYER);
  const handleCreatePlayer = async () => {
    if (!playerName) {
      toast({
        title: 'Please enter group name!'
      });
      return;
    }

    try {
      const { data } = await createPlayer({ variables: { name: playerName } });
      toast({
        title: 'Player created!',
        duration: 2000,

      });
      // setMemberIds((prevMemberIds) => [...prevMemberIds, data.createPlayer.id]);
      setPlayerId(data.createPlayer.id)
      setPlayerName('');
      setTimeout(() => { // Reset group name after success
      refetch().then(refetchedData => {
        console.log(refetchedData.data)
        const group = refetchedData.data.player.group;
        if (group) {
          setGroupName(group.name);
        }
      });}, 1000); // Refetch groups after creation

    } catch (error) {

      toast({
        title: 'Error Creating Player! Probably Exist Already'
      });
    }


  };




  if (loading) return <p className="text-center text-xl font-bold">Loading groups...</p>;
  if (error) return <p className="text-center text-xl font-bold text-red-500">Error: {error.message}</p>;



  return (
    <div>
      <div className="flex items-center !w-full flex-col container mx-auto px-4 py-8 !text-whiteout">
        <div className="div">
          <h1 className="text-3xl mb-4 text-center font-light font-sans uppercase tracking-[0.6em]">Let&apos;s Play</h1>
          <div className="flex flex-col mb-4">
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={playerName}
              name='playerName'
              onChange={(e) => setPlayerName(e.target.value)}
              className="shadow-sm rounded-md border border-gray-300 px-3  bg-darkpurple py-2 focus:outline-none focus:ring focus:ring-blue-500  rounded-r-none focus:ring-opacity-10"
            />
            <Button
              className="bg-lightpurple border hover:bg-purple-800 my-3 text-white hover:text-black border-white hover:border-black font-bold py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleCreatePlayer}
            >
              BEGIN
            </Button>
          </div>
          <h2 className="text-md mb-4 text-center font-bold font-sans uppercase tracking-[0.6em]">Your Group is</h2>
          <div id='group' className="font-heading text-5xl text-center uppercase bg-gradient-to-r from-lightpurple to-pink-700 text-transparent bg-clip-text ">
            {groupName}
          </div>

          <div className='mt-16 text-center '>
            <h2 className='font-sans uppercase mb-2'>Check Out The Menu</h2>
            <div className="flex space-x-7 justify-between !w-full">
              <div className="text-white text-sm uppercase flex">
                <div className=" border-2 rounded-lg border-lightpurple ">
                  <Link
                    href="/cocktail"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
                  >
                    <Martini className="h-5 w-5" />
                    <span className="sr-only">Cocktails</span>
                  </Link>
                </div>
              </div>
              <div className="text-white text-sm uppercase flex">
                <div className=" border-2 rounded-lg border-lightpurple ">
                  <Link
                    href="/snacks"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
                  >
                    <Popcorn className="h-5 w-5" />
                    <span className="sr-only">Small Chops</span>
                  </Link>
                </div>
              </div>
              <div className="text-white text-sm uppercase flex">
                <div className=" border-2 rounded-lg border-lightpurple ">
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-whiteout transition-colors hover:text-lightpurple md:h-8 md:w-8"
                  >
                    <Dice3 className="h-5 w-5" />
                    <span className="sr-only">Cocktails</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
