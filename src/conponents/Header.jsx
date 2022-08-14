import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const [open, setOpen] = useState(true);
    const toggle = () => { setOpen(!open) };
    const isOpen = () => { setOpen(open) }; //これをHomePage.jsxで利用したい

    return (
        <header>
            <button onClick={toggle}>{open ? <FontAwesomeIcon icon={faBars} size="lg" /> : <FontAwesomeIcon icon={faXmark} size="lg" />}</button>
            <div className="logo">
                <h3>Portfolio</h3>
            </div>


            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
