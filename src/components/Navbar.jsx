import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const Navbar = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const logout = async () => {
        const response = await axios.get('/api/v1/auth/logout',
            {
                withCredentials: true
            });

        setAuth({});
        navigate('/home');
    }

    return (
        <header className="App">
            <nav>
                <h1>Fridge App</h1>
                <NavLink to="/home">Home</NavLink>
                {auth?.user ?
                    <button onClick={logout}>Logout</button> :
                    <NavLink to="/login">Login</NavLink>}
            </nav>
        </header>
    )
}

export default Navbar;