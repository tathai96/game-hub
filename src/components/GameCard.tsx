import {Game} from "../model.ts";
import {Card, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game } : GameCardProps) => {
    return (
        <Card.Root borderRadius="10px" overflow="hidden">
            <Image src={ game.background_image } />
            <Card.Body>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard;