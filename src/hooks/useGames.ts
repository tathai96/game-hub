import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Game {
    id: number; // integer (ID)
    slug: string; // string <slug>, non-empty, ^[-a-zA-Z0-9_]+$
    name: string; // string (Name), non-empty
    released: string; // string <date> (Released)
    tba: boolean; // boolean (TBA)
    background_image: string; // string <uri> (Background image)
    rating: number; // required, number (Rating)
    rating_top: number; // integer (Rating top)
    ratings: Record<string, any>; // object (Ratings)
    ratings_count: number; // integer (Ratings count)
    reviews_text_count: string; // string (Reviews text count)
    added: number; // integer (Added)
    added_by_status: Record<string, any>; // object (Added by status)
    metacritic: number; // integer (Metacritic)
    playtime: number; // integer (Playtime) in hours
    suggestions_count: number; // integer (Suggestions count)
    updated: string; // string <date-time> (Updated)
    esrb_rating: Record<string, any> | null; // object Nullable
    platforms: Array<Record<string, any>>; // Array of objects
}

interface FetchGamesResponse {
    count: number; // required, integer
    next: string | null; // string <uri>, Nullable
    previous: string | null; // string <uri>, Nullable
    results: Game[]; // required, Array of objects (Game)
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;