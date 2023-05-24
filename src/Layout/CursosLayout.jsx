import NavBar from "../Component/navBar";
import Footer from "../Component/Footer";
import "./Layout.css";
import { GlobalStyle } from "../GlobalStyle";
import { Outlet } from "react-router-dom";
const CursosLayout = () => {
  return (
    <>
        <div className="main-content">
          <Outlet />
        </div>
    </>
  );
};
export default CursosLayout;
