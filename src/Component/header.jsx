import React from 'react';
import styled from 'styled-components';
import { Discord } from 'styled-icons/boxicons-logos/Discord';

const WhiteDiscord = styled(Discord)`
  color: #c8d6e5;
`

function Header(props){
    return(
        <div className="Header">
            <div className="HeaderContent">
                <div className="Logo">
                    <img src={props.logo} alt="skullrp-logo"/>
                </div>
                <div className="Title">
                    <p>Bienvenue sur SkullRP !</p>
                </div>
                <div className="JoinContainer">
                    <div className="discord">
                        <a 
                            href="https://discord.gg/Ea4rEZQ" 
                            target="_blank" 
                            rel="noopener noreferrer"> </a>
                        <WhiteDiscord />
                        <p>Rejoignez notre Discord</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;