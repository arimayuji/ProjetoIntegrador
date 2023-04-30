import NavBar from "../Component/navBar";
import Footer from "../Component/Footer";
import "./Layout.css";
import { GlobalStyle } from "../GlobalStyle";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <GlobalStyle />
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
export default Layout;
