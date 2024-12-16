import {MenuRoot, MenuContent, MenuItem, MenuTrigger} from "./ui/menu";
import {Button, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {
    const { platforms, loading } = usePlatforms();

    if(loading) return <Spinner />;

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"} >
                    Platform
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                { platforms.map(platform => (
                    <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
                )) }
                {/*<MenuItem value="hello">Hello</MenuItem>*/}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;