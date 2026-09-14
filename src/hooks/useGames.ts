import type { GameQuery } from "@/App";
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
    metacritic: number;
    rating_top: number;
}
// using typescript to define the shape of the response

const useGames = (gameQuery: GameQuery) => useData<Game>(`/games`,
     {params:
         {genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        //   with this query object, we don't need to add sort order as another dependency is the benefit of encapsulating related data into a single object, we can just pass the gameQuery object as a dependency and it will re-render when any of the properties change
        }}, 
         [gameQuery])


export default useGames; 