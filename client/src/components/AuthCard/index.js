import React, { Component, createContext, useContext } from 'react';
import { Auth0Context } from '../../contexts/auth0-context';

import "./style.css"

 function AuthCard() {
  const { isLoading, user, loginWithRedirect, logout } = useContext(Auth0Context);
  
 // console.log(user);

  var startUp = null;
  if(!user) {
    startUp = <button onClick={loginWithRedirect}>Log in</button>
  // } else {
  //   startUp = 
  //   <div>
      
  //      <button onClick={() => logout({returnTo: window.location.origin })}>Logout</button> 
  //     </div>;
   }


  return (
    <div>
     {startUp}
    </div>
  );
};

export default AuthCard;