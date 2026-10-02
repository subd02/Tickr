import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
            <div className="container p-2">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img 
                        src="media/Tickr.png" 
                        alt="Logo" 
                        style={{ width: "30px" }} 
                        className="me-2"
                    />
                    <span style={{ fontSize: "1.2rem", color: "#1E3A5F", fontWeight: "700" }}>
                        Tickr
                    </span>
                </Link>

                {/* Right: Nav Links */}
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav align-items-center gap-4">
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to="/support">Support</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-muted" style={{ cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;