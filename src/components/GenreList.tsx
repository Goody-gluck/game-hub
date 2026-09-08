import useGenre, { type Genre } from '@/hooks/useGenre'
import getCroppedImageUrl from '@/services/image-url'
import { Button, HStack, Image, List } from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'

interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre?: Genre | null
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
    const {data, isLoading, error} = useGenre()

    if (error) return null;
    if(isLoading) return <GenreListSkeleton />
  return (
    <List.Root listStyleType={'none'}>
      {data.map((genre) => 
      <List.Item key={genre.id} paddingY={'5px'}>
    <HStack>
        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant="plain" _hover={{textDecoration: 'underline'}}>
            {genre.name}
        </Button>
    </HStack>
    </List.Item>)}  
    </List.Root>
  )
}

export default GenreList