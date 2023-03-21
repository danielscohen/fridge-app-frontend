import { useState, useEffect } from "react"
import axios from "../api/axios";

function Users() {
    const [users, setUsers] = useState();
    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.email}</li>)}
                    </ul>
                ) : <p>No Users To Display</p>}
        </article>
    )
}
export default Users