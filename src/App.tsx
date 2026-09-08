import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenre"


function App() {
  // the below means the state can either be of type Genre or null, and we set the initial state to null
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    // for the templateAreas we set it to objects because we want to set different screen sizes
    <Grid templateAreas={{
      base: '"nav" "main"',
      lg: '"nav nav" "aside main"' 
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
          <NavBar />
      </GridItem>
      
        <GridItem area="aside" 
        paddingX={"5"} display={{base: 'none', lg: 'block'}}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      
      <GridItem area="main"> 
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>

    </Grid>
 )
}

export default App
