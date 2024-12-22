import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {GameTrailer} from "../model.ts";

const useTrailers = (gameId: number) => useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => apiClient
        .get<GameTrailer>(`/games/${gameId}/movies`)
        .then(res => res.data)
})

export default useTrailers;