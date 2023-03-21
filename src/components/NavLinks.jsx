import UserContainer from './UserContainer';

const NavLinks = ({ logoutHandler, user }) => {
    return (
        <div>
            <h3>Context API</h3>
            <h4>Home</h4>
            <h4>About</h4>
            <UserContainer logoutHandler={logoutHandler} user={user} />
        </div>
    )
}

export default NavLinks;