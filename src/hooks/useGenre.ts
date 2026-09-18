import genres from '@/data/genres';

export interface Genre {
    id: number;
    name: string,
    image_background: string
}


const useGenre = () => ({data: genres, isLoading: false, error: null}) // this is a temporary solution to avoid the error of useGenre being undefined, we will fix this later and because we dont want the consumers of the hook to know that we are using a temporary solution, we will return the data in the same shape as the useData hook, so that the consumers of the hook can use it without knowing that we are using a temporary solution

export default useGenre; 