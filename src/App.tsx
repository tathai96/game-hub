import {Grid, GridItem} from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./model.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`, //wider than 1024 px
        }}
              templateColumns={{
                  base: "1fr",
                  lg: "200px 1fr",
              }}
        >
            <GridItem area="nav">
                <Navbar/>
            </GridItem>
            <GridItem paddingX={5} display={{base: "none", lg: "block"}} area="aside">
                <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
            </GridItem>
            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    );
}

export default App
