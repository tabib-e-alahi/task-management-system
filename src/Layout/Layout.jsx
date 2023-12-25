import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedComponents/Navbar/Navbar";
import Footer from "../pages/SharedComponents/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;