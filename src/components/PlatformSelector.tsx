import {MenuRoot, MenuContent, MenuItem, MenuTrigger} from "./ui/menu";
import {Button, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {PlatformDetails} from "../model.ts";
// import {SelectionDetails} from "@chakra-ui/react/dist/types/components/menu";

interface PlatformSelectorProps {
    onSelectPlatform: (platform: PlatformDetails) => void;
    selectedPlatform: PlatformDetails | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: PlatformSelectorProps) => {
    const { data: platforms, isLoading } = usePlatforms();

    if(isLoading) return <Spinner />;

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"} >
                    {selectedPlatform?.name || 'Platforms'}
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                { platforms?.results.map(platform => (
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
                )) }
                {/*<MenuItem value="hello">Hello</MenuItem>*/}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;