import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {Genre} from "../model.ts";

interface GameGridProps {
    selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre}: GameGridProps) => {
    const {games, error, loading} = useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {error && <Text color="red">{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={3}>
                {loading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;