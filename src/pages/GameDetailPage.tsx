import {useParams} from "react-router";
import useGameDetail from "../hooks/useGameDetail.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";

const GameDetailPage = () => {
    const { slug } = useParams();
    const {data: gameDetail, isLoading, error} = useGameDetail(slug!)

    if (isLoading) return <Spinner />

    if (error || !gameDetail) throw error;

    return (
        <>
            <Heading>{ gameDetail.name }</Heading>
            <ExpandableText>{ gameDetail.description_raw }</ExpandableText>
        </>
    )
}

export default GameDetailPage