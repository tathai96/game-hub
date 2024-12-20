import apiClient from "../services/api-client.ts";
import {FetchGamesResponse} from "../model.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import useGameQueryStore from "../store.ts";

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}: { pageParam?: number }) =>
            apiClient
                .get<FetchGamesResponse>('/games', {
                    params: {
                        genres: gameQuery.genreId,
                        parent_platform: gameQuery.platform,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }
                })
                .then(res => res.data),
        initialData: undefined,
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24*60*60*1000,

    })
}

export default useGames;