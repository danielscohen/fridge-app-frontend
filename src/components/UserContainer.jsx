const UserContainer = ({ logoutHandler, user }) => {
    return (
        <div>
            {user.name && <h4>Hello There, {user.name}</h4>}
            <button onClick={logoutHandler}>{user.name ? 'Logout' : 'Login'}</button>
        </div>

    )
}

export default UserContainer;