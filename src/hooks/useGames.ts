import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Props {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } [],
    metacritic: number
}
// using typescript to define the shape of the response
interface fetchGameResponse {
    count: number;
    results: Game[];

}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false);
    
        useEffect(() => {

            const controller = new AbortController()
            // we provided a generic type argument below, with that we know the shape of the response object
            setLoading(true)
            apiClient.get<fetchGameResponse>(`/games`, {signal: controller.signal})
            .then(res => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })

            return () => controller.abort();
        }, [])

        //   we return the below so we can use them in other components
        return {games, error, isLoading}
}

export default useGames;