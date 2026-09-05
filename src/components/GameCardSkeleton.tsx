import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
    <Card.Root>
        {/* skeleton is like a placeholder that holds an Image that is been loaded */}
        <Skeleton height={'200px'}/>
        <Card.Body>
            <SkeletonText />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton