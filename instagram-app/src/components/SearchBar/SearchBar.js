import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <nav className="main-nav">
            
                <div className="logo">
                    <i className="fab fa-instagram nav-icon" />
                    <img src="https://www.bing.com/th?id=OIP.7MNhbuSUbRqr6V_w_korXQAAAA&pid=Api&rs=1&p=0" alt="Instagram Logo" />
                </div>

                <div className="search">
                    <textarea type="text" placeholder="search" />
                </div>

                <div className="menu">
                    <i className="far fa-compass nav-icon" />
                    <i className="fas fa-heart nav-icon" />
                    <i className="fas fa-user nav-icon" />
                </div>
            
        </nav>
    );
};

export default SearchBar;