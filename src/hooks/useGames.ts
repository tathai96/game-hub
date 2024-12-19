import apiClient from "../services/api-client.ts";
import {FetchGamesResponse, Genre, PlatformDetails} from "../model.ts";
import {useInfiniteQuery} from "@tanstack/react-query";

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformDetails | null, selectedSortOrder: string | null, searchValue: string | null) => useInfiniteQuery({
    queryKey: ['games', selectedGenre, selectedPlatform, selectedSortOrder, searchValue],
    queryFn: ({pageParam = 1}: { pageParam?: number }) =>
        apiClient
            .get<FetchGamesResponse>('/games', {
                params: {
                    genres: selectedGenre?.id,
                    parent_platform: selectedPlatform?.id,
                    ordering: selectedSortOrder,
                    search: searchValue,
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
// params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: selectedSortOrder, search: searchValue}

export default useGames;