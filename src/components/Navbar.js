// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ user }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Company Logo" />
                <span>CompanyName</span>
            </div>
            <div className="user-profile">
                <img src={user.imageUrl} alt="User" className="user-image" />
            </div>
        </div>
    );
}

export default Navbar;
