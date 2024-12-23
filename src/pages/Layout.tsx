import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router";
import {Box} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
}

export default Layout;