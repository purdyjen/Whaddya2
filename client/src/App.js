import React , { useContext } from "react";
import { Auth0Context } from './contexts/auth0-context';

import { useAuth0 } from "./react-auth0-spa";
//import "./App.css"
import history from "./utils/history";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";

function App() {
  //const { isLoading, user, loginWithRedirect, logout } = useContext(Auth0Context); 

  
  return (
    // <div className="hero is-info is-fullheight">
    //   <div className="hero-body">
    //     <div className="container has-text-centered">
    //       {!isLoading && !user && (
    //         <>
    //           <h1>Click Below!</h1>
    //           <button onClick={loginWithRedirect} className="button is-danger">
    //             Login
    //           </button>
    //         </>
    //       )}
    //       {!isLoading && user && (
    //         <>
    //           <h1>You are logged in!</h1>
    //           <p>Hello {user.name}</p>

    //           {user.picture && <img src={user.picture} alt="My Avatar" />}
    //           <hr />

    //           <button
    //             onClick={() => logout({ returnTo: window.location.origin })}
    //             className="button is-small is-dark"
    //           >
    //             Logout
    //       </button>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
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
  );
}

export default App;
