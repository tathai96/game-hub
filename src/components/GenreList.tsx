import useGenres from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, Spinner} from "@chakra-ui/react";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

    if(error) return null;
    if(isLoading) return <Spinner />

    return (
        <>
            <List.Root>
                { genres?.results.map(genre =>
                    <List.Item key={genre.id} paddingY={"5px"} listStyleType="none">
                        <HStack>
                            <Image objectFit={'cover'} boxSize="32px" borderRadius={8} src={genre.image_background} />
                            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={ genre.id === selectedGenreId ? 'bold' : 'normal' } onClick={() => setSelectedGenreId(genre.id)} variant={"ghost"} fontSize="lg">{genre.name}</Button>
                        </HStack>
                    </List.Item>) }
            </List.Root>
        </>
    )

}

export default GenreList