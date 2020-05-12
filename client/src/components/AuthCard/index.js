import React, { useContext } from 'react';
import { Auth0Context } from '../../contexts/auth0-context';

import "./style.css"

 function AuthCard() {
  const {user, loginWithRedirect} = useContext(Auth0Context);


  var startUp = null;
  if(!user) {
    startUp = <button id="login" onClick={loginWithRedirect}>Log in</button>

   }

console.log(user)
  return (
    <div>
     {startUp}
    </div>
  );
};

export default AuthCard;