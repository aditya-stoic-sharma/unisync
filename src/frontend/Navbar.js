// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-2 ">
                <Link className="navbar-brand" to="#">
                    <img src="/resources/smvduLogo.png" alt="" width="30" height="30" className="d-inline-block align-top rounded-circle" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/timetabel" >TimeTable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/notes" >Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/complaint">Complaint</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
