import React, { useContext } from "react";
import "./style.css";
import { Auth0Context } from '../../contexts/auth0-context';
import { Col, Row, Container } from "../Grid";

function LogoutBtn() {
  const { isLoading, user, loginWithRedirect, logout} = useContext(Auth0Context);
  
console.log(user);
  
  return (
    <Container fluid>
      <Row>
          <button onClick={() => logout({returnTo: window.location.origin })}>Logout</button>
        
          </Row>
  </Container>
  );
};

export default LogoutBtn;