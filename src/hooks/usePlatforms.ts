import {PlatformResult} from "../model.ts";
import apiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient.get<PlatformResult>('/platforms/lists/parents').then(res => res.data),
})

export default usePlatforms;