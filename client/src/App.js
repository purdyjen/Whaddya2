
import React, { Component } from "react";

import { useAuth0 } from "./react-auth0-spa";
import Header from "./components/Header";
import history from "./utils/history";
import AuthCard from "./components/AuthCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import Login from "./pages/Login";
import Options from "./pages/Options";
import NoMatch from "./pages/NoMatch";
import cards from "./cards.json";


// const { loading } = useAuth0();

// if (loading) {
//   return <div>Loading...</div>;
// }
class App extends Component {

  state = {
    cards,
    selected: false,
    selectedgenres: []
  }

  clickedCard = id => {
    var state = $(this).attr("data-state");
    // select an unselected icon
    if (state === "default") {
      var selectedVal = $(this).attr("data-selected");
      $(this).attr("src", selectedVal);
      console.log(selectedVal);

      $(this).addClass("selected");
      $(this).attr("data-state", "selected");
      $(this).removeClass("default");

      // ! verifying
      var state = $(this).attr("data-state");
      console.log(state);

      // logic tied to the user's current location
      // if the user is at genres
      if (window.location.href.includes("genres")) {
        // save the users genre selection to a variable
        console.log("done");

        genre = $(this).attr("name");
        // genreChoice.push(choice)
        console.log(genreChoice);

        // pass the user's choice to the getMovies function
        getMovies(genre);
        // if the user is at platforms
      } else if (window.location.href.includes("platforms")) {
        platformChoice = $(this).attr("name");
        console.log(platformChoice);
      }
      // deselect a selected icon
    } else if (state === "selected") {
      var defaultVal = $(this).attr("data-default");
      $(this).attr("src", defaultVal);
      console.log(defaultVal);
      $(this).addClass("default");
      $(this).attr("data-state", "default");
      $(this).removeClass("selected");
    }
  } //close clickedCard
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