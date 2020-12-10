import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="./images/logox3_1.png" width="70" className="d-inline-block align-center" height="auto" alt="Logo-BlackMilk"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-center mr-auto ml-auto">
                <a className="nav-item nav-link active" href="#">Home</a>
                <a className="nav-item nav-link" href="#">About</a>
                <a className="nav-item nav-link" href="#">Shop</a>
                <a className="nav-item nav-link" href="#">Sale</a>
                <a className="nav-item nav-link" href="#">Info</a>
                <a className="nav-item nav-link" href="#">Shipping</a>
            </div>
            <CartWidget/>
            </div>
      </nav>
    );
  }

export default NavBar;