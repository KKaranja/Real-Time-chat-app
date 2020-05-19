import React from 'react';
import "./InfoBar.css"

const InfoBar = () => {
    return <div className="infoBar">

        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon}/>
        </div>
        <div className="rightInnerContainer" />
      </div>;
}

export default InfoBar;
