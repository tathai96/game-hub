import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "./ui/menu.tsx";
import {Button} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store.ts";

const SortSelector = () => {
    const sortOrder = [
        {value: "asc", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ];
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
    const currentSortOrder = sortOrder.find(order => order.value === selectedSortOrder);

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"}>
                    Order by: { currentSortOrder?.label || 'Relevance' }
                    <BsChevronDown/>
                </Button>
            </MenuTrigger>
            <MenuContent>
                {sortOrder.map(order => <MenuItem onClick={() => setSelectedSortOrder(order.value)} key={order.value}
                                                  value={order.value}>{order.label}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )

}

export default SortSelector;