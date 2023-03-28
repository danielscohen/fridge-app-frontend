import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Users() {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/accounts/getAll', {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data.accounts);
            } catch (error) {
                console.error(error);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [])
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