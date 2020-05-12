import React, { useContext, Fragment } from "react";
import "./style.css";
import { useAuth0 } from '../../contexts/auth0-context';

export function Friends({children}){
    return (
        <div id="friendsContainer">
            {children}
        </div>
    )
}

export default Friends;  