import {useEffect, useState} from "react";
import {PlatformDetails, PlatformResult} from "../model.ts";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<PlatformDetails[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<PlatformResult>('/platforms/lists/parents', { signal: controller.signal })
            .then(res => {
                setPlatforms(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { platforms, error, loading }
}

export default usePlatforms;