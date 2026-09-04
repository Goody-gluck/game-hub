import type { Game } from '@/hooks/useGames';
import { Card, Heading, Image, Text} from '@chakra-ui/react';
import PlatformIconList from './PlatrformIconList';
interface Props {
    game: Game;
}
const GameCard = ({game} : Props) => {

    console.log("PARENT PLATFORMS:", game.parent_platforms)
  return (
    <Card.Root borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <Card.Body>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard