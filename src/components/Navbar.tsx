import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput.tsx";

interface SearchInputProps {
    onSearch: (value: string) => void;
}

const Navbar = ({onSearch}: SearchInputProps) => {
  return (
      <HStack>
          <Image src={logo} alt="logo" boxSize="60px" />
          <SearchInput onSearch={onSearch} />
      </HStack>
  )
}

export default Navbar