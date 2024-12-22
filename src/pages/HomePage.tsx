import {Grid, GridItem, HStack} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`, //wider than 1024 px
        }}
              templateColumns={{
                  base: "1fr",
                  lg: "200px 1fr",
              }}
        >
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
    )
}

export default HomePage;