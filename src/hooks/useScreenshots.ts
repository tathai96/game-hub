import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {GameScreenshot} from "../model.ts";

const useScreenshots = (gameId: number) => useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient
        .get<GameScreenshot>(`/games/${gameId}/screenshots`)
        .then(res => res.data)
})

export default useScreenshots;