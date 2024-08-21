import {
    useEffect,
    useState
} from "react";
import { callApi } from "../call-api";

interface Hero {
    id: number,
    name: string,
    available: boolean
}

export function useFetch(url: string) {
    const [data, setData] = useState<Hero[]>();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        callApi<Hero[]>(url)
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            })

    }, [url]);

    return {
        data,
        error,
        isLoading
    };
}