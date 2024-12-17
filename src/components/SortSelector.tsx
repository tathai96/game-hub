import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "./ui/menu.tsx";
import {Button} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface SortSelectorProps {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string | null;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: SortSelectorProps) => {
    const sortOrder = [
        {value: "asc", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ];
    const currentSortOrder = sortOrder.find(order => order.value === selectedSortOrder)
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant={"outline"}>
                    Order by: { currentSortOrder?.label || 'Relevance' }
                    <BsChevronDown/>
                </Button>
            </MenuTrigger>
            <MenuContent>
                {sortOrder.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}
                                                  value={order.value}>{order.label}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )

}

export default SortSelector;