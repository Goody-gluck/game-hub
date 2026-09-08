import useData from "./useData";
import type { Genre } from "./useGenre";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>(`/games`, {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id])


export default useGames;