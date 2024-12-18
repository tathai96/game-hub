import useGenres from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, Spinner} from "@chakra-ui/react";
import {Genre} from "../model.ts";

interface GenreProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreProps) => {
    const { data: genres, error, isLoading } = useGenres();

    if(error) return null;
    if(isLoading) return <Spinner />

    return (
        <>
            <List.Root>
                { genres?.results.map(genre =>
                    <List.Item key={genre.id} paddingY={"5px"} listStyleType="none">
                        <HStack>
                            <Image objectFit={'cover'} boxSize="32px" borderRadius={8} src={genre.image_background} />
                            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={ genre.id === selectedGenre?.id ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)} variant={"ghost"} fontSize="lg">{genre.name}</Button>
                        </HStack>
                    </List.Item>) }
            </List.Root>
        </>
    )

}

export default GenreList