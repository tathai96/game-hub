import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, Text} from "@chakra-ui/react";

const GenreList = () => {
    const { genres, error } = useGenres();

    return (
        <>
            {error && <Text color="red">{error}</Text>}
            <List.Root>
                { genres.map(genre =>
                    <List.Item key={genre.id} paddingY={"5px"} listStyleType="none">
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} src={genre.image_background} />
                            <Text fontSize="lg">{genre.name}</Text>
                        </HStack>
                    </List.Item>) }
            </List.Root>
        </>
    )

}

export default GenreList