import React from "react";
import { Link } from "react-router-dom";
import '../cssFiles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="links" to='/'>HOME</Link>
            <Link className="links" to='/team_members'>TEAM</Link>
            <Link className="links" to='/'>JOB-LISTINGS</Link>
        </div>
    )
}

export default Navbar;