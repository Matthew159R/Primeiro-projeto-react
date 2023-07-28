import React from 'react'
import './App.css'

function Header (props) {
    return (
        <header className="header">
        <h1>{props.name}</h1>
        <ul className="menu">
            <li><a href="#">{props.links[0]}</a></li>
            <li><a href="#">{props.links[1]}</a></li>
            <li><a href="#">{props.links[2]}</a></li>
            <li><a href="#">{props.links[3]}</a></li>
            <li><a href="#">{props.links[4]}</a></li>
        </ul>
    </header>
    );
}

export default Header;