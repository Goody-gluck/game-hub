import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface fetchResponse <T> {
    count: number;
    results: T[];
}
// once we declare a paramter optional, all the parameters after it must also be optional, so we have to make deps optional as well
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
     const [data, setData] = useState<T[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setLoading] = useState(false);
        
            useEffect(() => {
    
                const controller = new AbortController()
                // we provided a generic type argument below, with that we know the shape of the response object
                setLoading(true)
                apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
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
            }, deps ? [...deps] : [])
    
            //   we return the below so we can use them in other components
            return {data, error, isLoading}
};

export default useData;