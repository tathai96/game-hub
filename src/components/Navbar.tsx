import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router";

const Navbar = () => {
  return (
      <HStack>
          <Link to={'/'}>
              <Image src={logo} alt="logo" boxSize="60px" />
          </Link>
          <SearchInput />
      </HStack>
  )
}

export default Navbar