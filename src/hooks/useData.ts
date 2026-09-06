import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface fetchResponse <T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
     const [data, setData] = useState<T[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setLoading] = useState(false);
        
            useEffect(() => {
    
                const controller = new AbortController()
                // we provided a generic type argument below, with that we know the shape of the response object
                setLoading(true)
                apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal})
                .then(res => {
                    setData(res.data.results)
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
            return {data, error, isLoading}
};

export default useData;