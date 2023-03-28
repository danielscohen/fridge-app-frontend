import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="root-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;