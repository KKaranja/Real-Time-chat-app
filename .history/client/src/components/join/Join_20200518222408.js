import React,{useState} from 'react';
import { Link } from "react-router-dom";

export const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input placeholder="Name" className="joinInput" type="text" onChange={event => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Room" className="joinInput mt-20" type="text" onChange={} />
          </div>
          <Link />
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </div>
      </div>;
}

export default Join;
