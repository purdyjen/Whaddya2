import React, { useContext } from "react";
import "./style.css";
import { useAuth0 } from '../../contexts/auth0-context';

function LogoutBtn() {
  const {logout} = useAuth0;
  
//console.log(user);
  
  return (
   <div id="btnContainer">
          <button id="logout" onClick={() => logout({returnTo: window.location.origin })}>Logout</button>
         
          </div>
  );
};

export default LogoutBtn;