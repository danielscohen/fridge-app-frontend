import NavLinks from './NavLinks';
import { useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState({ name: 'something' })
    const logout = () => {
        setUser({ name: null });
    }

    return (
        <div>
            <NavLinks logoutHandler={logout} user={user} />
        </div>
    )
}

export default Navbar;