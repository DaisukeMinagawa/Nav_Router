import React from "react";
import { bubble as Menu } from "react-burger-menu";
import '../Menu.css';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu>
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
        </Menu>
    );
};