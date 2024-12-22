import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;