import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import Header from "./components/Header";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import { Container } from "./components/Grid";
//import history from "./utils/history"




function App() {

  return (
    <Router>
      <Container fluid>
        <Header />
      
        <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/profile" component={Profile} />
           <Route exact path="/options" component={Options} />
           <Route component={NoMatch} />
         </Switch> 
      </Container>
    </Router> 
  );
}

export default App;
