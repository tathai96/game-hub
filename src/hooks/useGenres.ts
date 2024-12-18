import apiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {GenreResult} from "../model.ts";

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient.get<GenreResult>('/genres').then(res => res.data),
    staleTime: 24*60*60*1000,
})

export default useGenres;