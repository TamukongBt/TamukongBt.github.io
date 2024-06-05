"use client"
import { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useToast } from "@/components/ui/use-toast"// Assuming shadCN toast component
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash } from 'lucide-react';

const GET_GROUPS = gql`
  query GetGroups {
    groups {
      id
      name
    }
  }
`;

const CREATE_GROUP = gql`
  mutation CreateGroup($name: String!) {
    createGroup(name: $name) {
      id
      name
     
    }
  }
`;

const DELETE_GROUP = gql`
  mutation deleteGroup($id: ID!) {
    deleteGroup(id: $id){
      id, name
    }
  }
`;

export default function Home() {
  const [groupName, setGroupName] = useState('');
  const { toast } = useToast()
  const { loading, error, data, refetch } = useQuery(GET_GROUPS);
  const [createGroup] = useMutation(CREATE_GROUP);
  const [deleteGroup] = useMutation(DELETE_GROUP);

  const handleCreateGroup = async () => {
    if (!groupName) {
      toast({
        title: 'Please enter group name!'
      });
      return;
    }

    try {
      const { data } = await createGroup({ variables: { name: groupName } });
      toast({
        title: 'Group created!'
      });
      setGroupName(''); // Reset group name after success
      refetch(); // Refetch groups after creation
    } catch (error) {
      toast({
        title: 'Error Creating Group!'
      });
    }
  };


  const handleDeleteGroup = async (groupId: any) => {
    try {
      await deleteGroup({ variables: { id: groupId } });
      toast({
        title: 'Group deleted!'
      });
      refetch(); // Refetch groups after deletion
    } catch (error) {
      toast({
        title: 'Error Deleting!'
      });
    }
  };

  useEffect(() => {
    refetch(); // Fetch groups on initial render
  }, []);

  if (loading) return <p className="text-center text-xl font-bold">Loading groups...</p>;
  if (error) return <p className="text-center text-xl font-bold text-red-500">Error: {error.message}</p>;

  return (
    <div className="flex items-center !w-full flex-col container mx-auto px-4 py-8 !text-whiteout">
      <div className="div">
        <h1 className="text-3xl mb-4 text-center font-light font-sans uppercase tracking-[0.6em]">Create Group</h1>
        <div className="flex mb-4">
          <Input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="shadow-sm rounded-md border border-gray-300 px-3  bg-darkpurple py-2 focus:outline-none focus:ring focus:ring-blue-500  rounded-r-none focus:ring-opacity-10"
          />
          <Button
            className="bg-lightpurple border hover:bg-purple-800 text-white hover:text-black border-white hover:border-black font-bold py-2 px-4 rounded-md rounded-l-none focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            onClick={handleCreateGroup}
          >
            <PlusCircle size={20} className="mr-2" />
          </Button>
        </div>
        <h2 className="text-md mb-4 text-center font-bold font-sans uppercase tracking-[0.6em]">Groups</h2>
        {data.groups.map((group: any) => (
          <div key={group.id} className="border flex justify-between border-gray-300 rounded-md mb-4 px-4 py-2">
            <div className="text-3xl">
              <p className="font-bold !text-whiteout">Group {group.name}</p>
            </div>

            <Button
              className="text-purple-500 hover:text-white font-bold py-1 px-2 bg-blueishpurple focus:outline-none"
              onClick={() => handleDeleteGroup(group.id)}
            >
              <Trash size={20} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
