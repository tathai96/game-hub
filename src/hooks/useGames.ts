import apiClient from "../services/api-client.ts";
import {FetchGamesResponse, Genre, PlatformDetails} from "../model.ts";
import {useQuery} from "@tanstack/react-query";

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformDetails | null, selectedSortOrder: string | null, searchValue: string | null) => useQuery({
    queryKey: ['games', selectedGenre, selectedPlatform, selectedSortOrder, searchValue],
    queryFn: () =>
        apiClient
            .get<FetchGamesResponse>('/games', {
                params: {
                    genres: selectedGenre?.id,
                    parent_platform: selectedPlatform?.id,
                    ordering: selectedSortOrder,
                    search: searchValue
                }
            })
            .then(res => res.data),

})
// params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: selectedSortOrder, search: searchValue}

export default useGames;