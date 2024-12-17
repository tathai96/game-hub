import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "./ui/menu.tsx";
import {Button} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

const SortSelector = () => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"} >
                    Order By Relevance
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="relevance">Relevance</MenuItem>
                <MenuItem value="dateAdded">Date added</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="releaseDate">Release date</MenuItem>
                <MenuItem value="popularity">Popularity</MenuItem>
                <MenuItem value="average">Average rating</MenuItem>
            </MenuContent>
        </MenuRoot>
    )

}

export default SortSelector;