import { HStack, Skeleton, SkeletonText} from '@chakra-ui/react'


const GenreListSkeleton = () => {
    const skeletons = [1, 2, 3, 4, 5,6,7,8]
  return (
    <>
    {skeletons.map((skeleton) => (
         <HStack key={skeleton} marginBottom={'3'}>
            <Skeleton borderRadius={8} boxSize={'32px'}/>
            <SkeletonText noOfLines={1} width={'100px'}/>
        </HStack>
    ))}
    </>
  );
};
    
export default GenreListSkeleton