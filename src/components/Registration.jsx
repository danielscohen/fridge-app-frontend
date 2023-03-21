import { useState } from "react"

const Registration = () => {
    // const [user, setUser] = useState({
    //     username: "",
    //     email: "",
    //     password: ""
    // })
    // const handleChange = e => {
    //     setUser(prevUser =>
    //         ({ ...prevUser, [e.target.name]: e.target.value })
    //     )
    // }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if ([...formData.values()].filter(field => field === "").length > 0) return;
        const newUser = Object.fromEntries(formData);
        console.log("Submitted");
        e.currentTarget.reset();
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Registration</h4>
                <div className="form-row">
                    <label htmlFor="username">Username</label>
                    <input type='text' name='username'
                        id='username' />
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email'
                        id='email' />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password'
                        id='password' />
                </div>
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Registration;