import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"


function App() {
  return (
    // for the templateAreas we set it to objects because we want to set different screen sizes
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` 
    }}>
      <GridItem area="nav">
          <NavBar />
      </GridItem>
      {/* we arapped aside in show to make sure it is only rendered on large devices */}
      <Show when={{lg: true}}>
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
        
      
      <GridItem area="main"> 
        <GameGrid />
      </GridItem>

    </Grid>
 )
}

export default App
