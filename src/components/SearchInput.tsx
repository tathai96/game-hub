import {Input} from "@chakra-ui/react";
import {InputGroup} from "./ui/input-group.tsx";
import {BsSearch} from "react-icons/bs";

const SearchInput = () => {
    return (
        <>
            <InputGroup flex={1} startElement={<BsSearch />}>
                <Input placeholder="Search games..." borderRadius={20} variant="subtle" />
            </InputGroup>
        </>
    )
}

export default SearchInput;