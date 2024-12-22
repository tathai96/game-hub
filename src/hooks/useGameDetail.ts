import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {GameDetail} from "../model.ts";

const useGameDetail = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient
        .get<GameDetail>(`/games/${slug}`)
        .then(res => res.data)
})

export default useGameDetail;