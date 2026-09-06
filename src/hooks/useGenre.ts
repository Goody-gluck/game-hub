import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string
}

interface fetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
     const [genres, setGenre] = useState<Genre[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setLoading] = useState(false);
        
            useEffect(() => {
    
                const controller = new AbortController()
                // we provided a generic type argument below, with that we know the shape of the response object
                setLoading(true)
                apiClient.get<fetchGenreResponse>(`/genres`, {signal: controller.signal})
                .then(res => {
                    setGenre(res.data.results)
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
            return {genres, error, isLoading}
};

export default useGenre;