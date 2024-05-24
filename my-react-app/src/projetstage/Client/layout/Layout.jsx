// layout/Layout.jsx
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear login state when logging out
        sessionStorage.removeItem('isAdmin');
        // Navigate to the login page
        navigate('/');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px',  }}>
            <img src="/img/bpJPG.JPG" alt="BCP Logo" height="80px" width="200px" style={{ marginRight: 'auto' }} />
            <button className="btn" style={{ backgroundColor: 'rgb(253, 97, 0)', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={handleLogout}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Se déconnecter</Link>
            </button>
            <Outlet />
        </nav>
    );
}
