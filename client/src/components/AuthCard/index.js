import React, { Component, createContext, useContext } from 'react';
import { Auth0Context } from '../../contexts/auth0-context';

//import createAuth0Client from '@auth0/auth0-spa-js';
//import { useAuth0 } from "../../react-auth0-spa";
import "./style.css"

 function AuthCard() {
 //const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
//function AuthCard() {
  const { isLoading, user, loginWithRedirect, logout } = useContext(Auth0Context);
  
  console.log(user);

  var startUp = null;
  if(!user) {
    startUp = <button onClick={loginWithRedirect}>Log in</button>
  } else {
    startUp = <div>
      <h1>You are logged in!</h1>
      <p>Hello {user.name}</p>
      <button onClick={() => logout({returnTo: window.location.origin })}>Logout</button>
      </div>;
  }


  return (
    <div>
     {startUp}
    </div>
  );
};

export default AuthCard;