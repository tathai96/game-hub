import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput.tsx";
const Navbar = () => {
  return (
      <HStack>
          <Image src={logo} alt="logo" boxSize="60px" />
          <SearchInput />
      </HStack>
  )
}

export default Navbar