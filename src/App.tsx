import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import type { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import SearchInput from "./components/SearchInput"

// below we want to create a query object pattern, needed the query the games in order to make our code cleaner and easier to understand

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // the below means the state can either be of type Genre or null, and we set the initial state to null
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      
        <GridItem area="aside" 
        paddingX={"5"} display={{base: 'none', lg: 'block'}}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      
      <GridItem area="main"> 
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
 )
}

export default App
