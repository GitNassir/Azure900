import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Cloud Concept</Link></li>
                <li><Link to="/compute-networking">Azure Core Services</Link></li>
                <li><Link to="/azure-management">Azure Management Governance</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
