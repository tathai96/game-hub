import {Grid, GridItem, HStack} from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import './App.css';

function App() {
    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    // const [selectedPlatform, setSelectedPlatform] = useState<PlatformDetails | null>(null);
    // const [selectedSortOrder, setSelectedSortOrder] = useState<string | null>(null);
    // const [searchItem, setSearchItem] = useState<string | null>(null);

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
                <Navbar />
            </GridItem>
            <GridItem paddingX={5} display={{base: "none", lg: "block"}} area="aside">
                <GenreList/>
            </GridItem>
            <GridItem area="main">
                <HStack gap={5} paddingLeft={2} marginBottom={2}>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default App
