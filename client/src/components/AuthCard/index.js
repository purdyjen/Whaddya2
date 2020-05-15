import React, { useContext } from 'react';
import { useAuth0 } from '../../contexts/auth0-context';

import "./style.css"

 function AuthCard() {
  const {user, loginWithRedirect} = useAuth0;


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