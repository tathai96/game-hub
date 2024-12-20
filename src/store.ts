import {create} from "zustand/react";

interface GameQuery {
    genreId?: number;
    platform?: string;
    sortOrder?: string;
    searchText?: string;
}

interface GameStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void,
    setGenreId: (genreId: number) => void,
    setPlatformId: (platformId: number) => void,
    setSortOrder: (sortOrder: string) => void,
}

const useGameQueryStore = create<GameStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
}))

export default useGameQueryStore;