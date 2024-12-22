import {Game} from "../model.ts";
import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import { Link } from "react-router";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game } : GameCardProps) => {
    return (
        <Card.Root _hover={{ "transform": "scale(1.03)", "transition": "transform .15s ease-in" }} borderRadius="10px" overflow="hidden" width="300px">
            <Image objectFit={'cover'} src={ game.background_image } />
            <Card.Body>
                <Heading fontSize="2xl">
                    <Link to={`/games/${game.slug}`}>
                        {game.name}
                    </Link>
                </Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard;