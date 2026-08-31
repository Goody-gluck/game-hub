import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

// using typescript to define the shape of the response
interface Game {
    id: number;
    name: string;
}

interface fetchGameResponse {
    count: number;
    results: Game[];

}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // we provided a generic type argument below, with that we know the shape of the response object
        apiClient.get<fetchGameResponse>(`/games`)
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    })
  return (
    <>
    {error && <Text>{error}</Text>}
        <ul>{games.map((game => 
    <li key={game.id}>{game.name}</li>))}</ul>
    </>
    
  )
}

export default GameGrid