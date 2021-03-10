import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Nav.css'

const navbar = () => {
    return (
        <div className="nav">
            <Navbar fixed="top" bg="light">
                <Navbar.Brand>Pinchè Cafè</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default navbar;