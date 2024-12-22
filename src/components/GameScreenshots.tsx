import useScreenshots from "../hooks/useScreenshots.ts";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface GameScreenshotsProps {
    gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
    const { data, isLoading, error } = useScreenshots(gameId);

    if(isLoading) return null;

    if(error) throw error;

    return (
        <SimpleGrid gap={2} columns={{ base: 1, md: 2 }}>
            { data?.results.map(file => <Image key={file.id} src={file.image} />) }
        </SimpleGrid>
    )
}

export default GameScreenshots