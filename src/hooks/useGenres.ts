import {useEffect, useState} from "react";
import {Genre, GenreResult} from "../model.ts";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<GenreResult>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, loading }
}

export default useGenres;