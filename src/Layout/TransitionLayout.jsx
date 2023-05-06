import NavBar from "../Component/HomeNavBar";
import Footer from "../Component/Footer";
import "./Layout.css";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
    return (
        <>
            <div className="root-main">
                <div className="header">
                    <NavBar />
                </div>

                <div className="main-content">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default HomeLayout;
