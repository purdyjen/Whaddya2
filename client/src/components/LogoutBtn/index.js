import React, { useContext } from "react";
import "./style.css";
import { Auth0Context } from '../../contexts/auth0-context';

function LogoutBtn() {
  const {user, logout} = useContext(Auth0Context);
  
console.log(user);
  
  return (
   <div id="btnContainer">
          <button id="logout" onClick={() => logout({returnTo: window.location.origin })}>Logout</button>
         
          </div>
  );
};

export default LogoutBtn;