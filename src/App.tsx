import {Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

function App() {
  return (
          <Grid templateAreas={{
              base: `"nav" "main"`,
              lg: `"nav nav" "aside main"`, //wider than 1024 px
          }}>
              <GridItem area="nav">
                  <Navbar />
              </GridItem>
              <GridItem display={{ base: "none", lg: "block" }} area="aside">
                  <GenreList />
              </GridItem>
              <GridItem area="main">
                  <GameGrid />
              </GridItem>
          </Grid>
  );
}

export default App
