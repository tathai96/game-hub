import {MenuRoot, MenuContent, MenuItem, MenuTrigger} from "./ui/menu";
import {Button, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import useGameQueryStore from "../store.ts";

const PlatformSelector = () => {
    const { data: platforms, isLoading } = usePlatforms();
    const selectedPlatform = useGameQueryStore(s => s.gameQuery.platform);
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

    if(isLoading) return <Spinner />;

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"} >
                    {selectedPlatform || 'Platforms'}
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                { platforms?.results.map(platform => (
                    <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
                )) }
                {/*<MenuItem value="hello">Hello</MenuItem>*/}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;