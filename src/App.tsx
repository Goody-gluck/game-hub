import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"



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
        <GridItem area="aside" bg="gold">Aside
        </GridItem>
      </Show>
        
      
      <GridItem area="main" bg="green"> Main

      </GridItem>

    </Grid>
 )
}

export default App
