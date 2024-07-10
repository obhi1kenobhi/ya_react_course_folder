import { useState } from "react";

export default function Player({ name,symbol }){
    const [ isEditing, setIsEditing ] = useState(false);
    return(<li>
        <span className="player">
          {isEditing?<input type="text" placeholder={name}></input>:<span className="player-name">{name}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        {/* Toggled the edit functionality in the following button onclick function */}
        <button onClick={()=>{
            setIsEditing(!isEditing);
            isEditing?button.innerText = "Done":button.innerText = "Edit";
        }}>Edit</button> 
      </li>);
}