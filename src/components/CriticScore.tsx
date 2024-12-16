import {Badge} from "@chakra-ui/react";

interface CriticScoreProps {
    score: number
}

const CriticScore = ({ score }: CriticScoreProps) => {
    const colour = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    const foreColour = score > 75 ? 'white' : score > 60 ? 'black' : 'black';
    return (
        <Badge color={foreColour} bg={colour} fontSize="14px" paddingX={2} borderRadius="4px">{score}</Badge>
    )
}

export default CriticScore;