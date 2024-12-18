import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {Genre, PlatformDetails} from "../model.ts";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: PlatformDetails | null;
    selectedSortOrder: string | null;
    searchValue: string | null;
}

const GameGrid = ({selectedGenre, selectedPlatform, selectedSortOrder, searchValue}: GameGridProps) => {
    const {data: games, error, isLoading} = useGames(selectedGenre, selectedPlatform, selectedSortOrder, searchValue);
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {error && <Text color="red">{isLoading}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={3}>
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {games?.results.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;