import React from 'react';
import "./InfoBar.css"

import closeIcon from "../../images/closeIcon.png"
import onlineIcon  from "../../images/onlineIcon.png"
const InfoBar = ({ room }) =>
  <div className="infoBar">
    <div className="leftInnerContainer">
      <image className="onlineIcon" src={onlineIcon} alt="online image" />
      <h3>
        {room}
      </h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close image" />
      </a>
    </div>
  </div>;

export default InfoBar;
