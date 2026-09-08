import useGenre from '@/hooks/useGenre'
import getCroppedImageUrl from '@/services/image-url'
import { HStack, Image, List, Spinner, Text } from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'

const GenreList = () => {
    const {data, isLoading, error} = useGenre()

    if (error) return null;
    if(isLoading) return <GenreListSkeleton />
  return (
    <List.Root listStyleType={'none'}>
      {data.map((genre) => 
      <List.Item key={genre.id} paddingY={'5px'}>
    <HStack>
        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Text fontSize='lg'>{genre.name}</Text>
    </HStack>
    </List.Item>)}  
    </List.Root>
  )
}

export default GenreList