import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="container mx-auto flex justify-between items-center px-5 py-4">
            <h1 className="text-3xl font-bold">Travel-Destination</h1>
            <ul className="flex gap-3">
                <Link className="font-medium" to="/">
                    Home
                </Link>
                <Link className="font-medium" to="/destinations">
                    Destinations
                </Link>
                <Link className="font-medium" to="/login">
                    Login
                </Link>
                <Link className="font-medium" to="/register">
                    Register
                </Link>
            </ul>
        </nav>
    );
}

export default Header;
