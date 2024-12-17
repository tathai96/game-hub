import {Input} from "@chakra-ui/react";
import {InputGroup} from "./ui/input-group.tsx";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface SearchInputProps {
    onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) {
                onSearch(ref.current.value)
            }
        }}>
            <InputGroup style={{'width': '100%'}} startElement={<BsSearch />}>
                <Input ref={ref} placeholder="Search games..." borderRadius={20} variant="subtle" />
            </InputGroup>
        </form>
    )
}

export default SearchInput;