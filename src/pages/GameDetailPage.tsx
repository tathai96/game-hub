import {useParams} from "react-router";
import useGameDetail from "../hooks/useGameDetail.ts";
import {Heading, Spinner, Text} from "@chakra-ui/react";

const GameDetailPage = () => {
    const { slug } = useParams();
    const {data: gameDetail, isLoading, error} = useGameDetail(slug!)

    if (isLoading) return <Spinner />

    if (error || !gameDetail) throw error;

    return (
        <>
            <Heading>{ gameDetail.name }</Heading>
            <Text>{ gameDetail.description_raw }</Text>
        </>
    )
}

export default GameDetailPage