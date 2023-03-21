import { useState, useRef, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = '/api/v1/auth/login';
const HOME_URL = '/home';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password: pwd }), {
                headers: { 'Content-Type': 'application/json' }
            });
            const accessToken = response?.data?.token;
            setAuth({ user: email, pwd: password, accessToken });
            setEmail("");
            setPwd("");
            navigate(from, { replace: true });
        } catch (error) {
            if (!error?.response) {
                setErrMsg("No Server Response");
            } else if (error.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (error.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }

            errRef.current.focus();

        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailRef} autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                <button>Sign In</button>
                <p>
                    Don't have an account?<br />
                    <span className="line">
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </form>

        </section>
    )
}

export default Login;