import {useParams} from "react-router";
import useGameDetail from "../hooks/useGameDetail.ts";
import {GridItem, Heading, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import DefinitionItem from "../components/DefinitionItem.tsx";
import CriticScore from "../components/CriticScore.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data: gameDetail, isLoading, error} = useGameDetail(slug!)

    if (isLoading) return <Spinner/>

    if (error || !gameDetail) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            <GridItem>
                <Heading>{gameDetail.name}</Heading>
                <ExpandableText>{gameDetail.description_raw}</ExpandableText>
                <SimpleGrid columns={2} as={"dl"}>
                    <DefinitionItem term={'Platforms'}>
                        {gameDetail.parent_platforms.map(({platform}) => (<Text key={platform.id}>{platform.name}</Text>))}
                    </DefinitionItem>
                    <DefinitionItem term={'Metascore'}>
                        <CriticScore score={gameDetail.metacritic} />
                    </DefinitionItem>
                    <DefinitionItem term={'Genres'}>
                        { gameDetail.genres.map(genre => (<Text key={genre.id}>{genre.name}</Text>)) }
                    </DefinitionItem>
                    <DefinitionItem term={'Publishers'}>
                        { gameDetail.publishers.map(publisher => (<Text key={publisher.id}>{publisher.name}</Text>)) }
                    </DefinitionItem>
                </SimpleGrid>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={gameDetail.id}/>
                <GameScreenshots gameId={gameDetail.id} />
            </GridItem>

        </SimpleGrid>
    )
}

export default GameDetailPage