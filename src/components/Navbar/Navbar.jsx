import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <nav className="navbar">
            <h1><Link to="/">Kobby Technologies</Link></h1>
            <ul className="nav-links">
                {/* <li><a href="/">Home</a></li> */}
                <li><a href="#">About</a></li>
                <li 
                    className="login-dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <span className="login">Login</span>
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li><Link to="/projectmanager">Project Manager</Link></li>
                            <li><Link to="/dev">Developer</Link></li>
                            <li><Link to="/user">User</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
