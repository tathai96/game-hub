import {Card} from "@chakra-ui/react";
import { Skeleton, SkeletonText }  from './ui/skeleton.tsx'

const GameCardSkeleton = () => {
    return (
        <Card.Root width="300px">
            <Skeleton width="100%" height={200} />
            <Card.Body>
                <SkeletonText width="100%" height={200} />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCardSkeleton;