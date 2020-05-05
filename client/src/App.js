
import React from "react";

import { useAuth0 } from "./react-auth0-spa";
import "./App.css"
//import history from "./utils/history";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
       
        <Wrapper>
        <Header />
        <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/profile" component={Profile} />
           <Route exact path="/options" component={Options} />
           <Route component={NoMatch} />
         </Switch> 
         </Wrapper>
      </div>
    </Router> 

     // <Router>
    //   <div>
    //     <Header />
    //     <AuthCard/>
    //     <Switch>
    //       <Route exact path="/" component={Login} />
    //       <Route exact path="/profile" component={Profile} />
    //       <Route exact path="/options" component={Options} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   
    // </div>
    // </Router>  */}
  );
}

export default App;