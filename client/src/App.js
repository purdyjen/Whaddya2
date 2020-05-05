
import React, { Component } from "react";

// import { useAuth0 } from "./react-auth0-spa";
// import Header from "./components/Header";
// import history from "./utils/history";
// import AuthCard from "./components/AuthCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import Login from "./pages/login";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";



// const { loading } = useAuth0();

// if (loading) {
//   return <div>Loading...</div>;
// }
class App extends Component {

 
  render () {
    return (
    <div className="App">

        <Router>
        <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/profile" component={Profile} />
           <Route exact path="/options" component={Options} />
           <Route component={NoMatch} />
         </Switch>
         </Router>
     </div>
    );
  }
}


export default App;