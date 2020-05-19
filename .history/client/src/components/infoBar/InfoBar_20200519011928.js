import React from 'react';
import "./InfoBar.css"

import closeIcon from "../../images/closeIcon.png"
import onlineIcone from "../../images/onlineIcon.png"
const InfoBar = () => {
    return <div className="infoBar">

        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image"/>
            <h3>roomName</h3>
        </div>
        <div className="rightInnerContainer" >
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
      </div>;
}

export default InfoBar;
