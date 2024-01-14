import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginStatus, setLoginStatus] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-purple-500 md:bg-blue-500">
            <a href="/">
                <img
                    className="h-28 pl-2 sm:justify-center"
                    alt="logo"
                    src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1705165190/channels4_profile_h6jxvu.png"
                />
            </a>
            <div className="nav-items">
                <ul className="flex py-10">

                    <li className="px-2">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">
                        <Link to="/instamart">
                            Instamart
                        </Link>
                    </li>
                </ul>
            </div>
            <span className="py-10 px-2">{user.name}</span>
            {loginStatus ?
                <button
                    onClick={() => setLoginStatus(false)}
                >
                    <Link to="/">
                        Logout
                    </Link>
                </button> :
                <button
                    onClick={() => setLoginStatus(true)}
                >
                    <Link to="/login">
                        Login
                    </Link>
                </button>}
            <div className="px-2 py-10">
                <h1>{isOnline ? "✅" : "🔴"}</h1>
            </div>
        </div>
    )
}

export default Header;
