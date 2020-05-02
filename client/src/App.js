
import React from "react";

import { useAuth0 } from "./react-auth0-spa";
import Header from "./components/Header";
//import Profile from "./components/Profile";
import history from "./utils/history";
import AuthCard from "./components/AuthCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import login from "./pages/login";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
        <AuthCard />
        <Router>
        {/* <Switch>
           <Route exact path="/" component={login} />
           <Route exact path="/profile" component={Profile} />
           <Route exact path="/options" component={Options} />
           <Route component={NoMatch} />
         </Switch>
         </Router> */}
     </div>
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
    // </Router>
  );
}

export default App;