import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {FetchGamesResponse, Game, Genre, PlatformDetails} from "../model.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import {Fragment} from "react";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: PlatformDetails | null;
    selectedSortOrder: string | null;
    searchValue: string | null;
}

const GameGrid = ({selectedGenre, selectedPlatform, selectedSortOrder, searchValue}: GameGridProps) => {
    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames(selectedGenre, selectedPlatform, selectedSortOrder, searchValue);
    const skeletons = [1,2,3,4,5,6];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount =
        data?.pages.reduce(
            (total, page) => total + page.results.length,
            0
        ) || 0;

    return (
        <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={3}>
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {/*{games.pages.map(game => <GameCard key={game.id} game={game} />)}*/}
                {data?.pages.map((page: FetchGamesResponse, index: number) => (
                    <Fragment key={index}>
                        {page.results.map((game: Game) => (
                            <GameCard key={game.id} game={game} />

                        ))}
                    </Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;