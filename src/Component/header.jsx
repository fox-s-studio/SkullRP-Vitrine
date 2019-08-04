import React from 'react';

function Header(props){
    return(
        <div className="Header">
            <div className="HeaderContent">
                <div className="Logo">
                    <img src={props.logo} alt="skullrp-logo"/>
                </div>
                <div className="Title">
                    Bienvenue sur SkullRP !
                </div>
            </div>
        </div>
    )
};

export default Header;