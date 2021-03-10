import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Header.css'

const Header = () => {
    return (
        <div className="Jumbotron">
            <Jumbotron className="Jumbo">
            <h1>Welcome to <br />¡Pinchè Cafè!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
        </Jumbotron>
        </div>
        
    )
}

export default Header;