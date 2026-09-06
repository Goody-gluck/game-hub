import useData from "./useData";

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

const useGames = () => useData<Game>(`/games`)

export default useGames;