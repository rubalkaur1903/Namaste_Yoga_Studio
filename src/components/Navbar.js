import React from "react";
import { Link } from "react-router-dom";
import '../cssFiles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link className="navbar-image-link" to='/'>
                    <img className="navbar-image" src="https://thumbs.dreamstime.com/b/vector-yoga-illustration-black-gold-colors-silhouette-meditating-woman-lotus-flower-religious-symbol-om-golden-158266850.jpg" />
                </Link>
            </div>
            <div className="navbar-links">
                <Link className="links" to='/'>HOME</Link>
                <Link className="links" to='/team_members'>TEAM</Link>
                <Link className="links" to='/jobs'>CAREERS</Link>
            </div>
        </div>
    )
}

export default Navbar;