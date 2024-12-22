import {Input} from "@chakra-ui/react";
import {InputGroup} from "./ui/input-group.tsx";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import useGameQueryStore from "../store.ts";
import {useNavigate} from "react-router";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) {
                setSearchText(ref.current.value);
                navigate('/');
            }
        }}>
            <InputGroup style={{'width': '100%'}} startElement={<BsSearch />}>
                <Input ref={ref} placeholder="Search games..." borderRadius={20} variant="subtle" />
            </InputGroup>
        </form>
    )
}

export default SearchInput;