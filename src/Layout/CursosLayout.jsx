import "./Layout.css";
import "./CursosLayout.css";
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
