import React from 'react'
import { HStack, Image, List, Skeleton, SkeletonText, Text } from '@chakra-ui/react'


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

// Card.Root>
//         {/* skeleton is like a placeholder that holds an Image that is been loaded */}
//         <Skeleton height={'200px'}/>
//         <Card.Body>
//             <SkeletonText />
//         </Card.Body>
//     </Card.Root>