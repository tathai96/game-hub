import {GamePlatform} from "../model.ts";
import {List} from "@chakra-ui/react";

interface  PlatformIconListProps {
    platforms: GamePlatform[];
}

const PlatformIconList = ({ platforms } : PlatformIconListProps) => {
    return (
        <List.Root as={"ol"}>
            {
                platforms.map((platform) => (
                    <List.Item key={platform.id}>
                        {platform.name}
                    </List.Item>
                ))
            }
        </List.Root>

    )
}

export default PlatformIconList;