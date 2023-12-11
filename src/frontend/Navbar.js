// Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Navbar(props) {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-2 ">
                <Link className="navbar-brand" to="#">
                    <img src="/resources/smvduLogo.png" alt="" width="30" height="30" className="d-inline-block align-top rounded-circle" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/Home" ? "active" : ""}`} aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home/timetabel" ? "active" : ""}`} to="/home/timetabel" >TimeTable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home/notes" ? "active" : ""}`} to="/home/notes" >Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home/complaint" ? "active" : ""}`} to="/home/complaint">Complaint</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
