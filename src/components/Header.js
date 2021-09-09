import React from 'react'

const Header  = (props) => {
    return ( 
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{props.title}</h1>
                    <p className="text">This project ilustrate the characters of the new series of the TNT, Final Space</p>
                </div>
            </div>
        </header>
    );
}

export default Header;