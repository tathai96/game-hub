import useTrailers from "../hooks/useTrailers.ts";

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
    const { data } = useTrailers(gameId);

    if(data?.results.length ==0) {
        return (
            <div> No Trailers </div>
        )
    }

    const gameUrl: string | undefined = data?.results[0].data["480"];
    const gamePoster: string | undefined = data?.results[0].preview;
    return (
        <>
            <video controls={true} title="naruto" src={gameUrl} poster={gamePoster} preload={"true"}></video>
        </>
    )
}
export default GameTrailer