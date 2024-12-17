import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
import {FetchGamesResponse, Game, Genre, PlatformDetails} from "../model.ts";

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformDetails | null, selectedSortOrder: string | null, searchValue: string | null) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGamesResponse>('/games', {
            signal: controller.signal,
            params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: selectedSortOrder, search: searchValue}
        })
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, [selectedGenre, selectedPlatform, selectedSortOrder, searchValue]);

    return {games, error, loading}
}

export default useGames;