import React, { Component } from "react";
import Card from "../Card";
import cards from "./cards.json";
import firebase from "firebase";


 
// import Button from "../Button";
import "./style.css"
class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedgenres: [],
      cards: cards,
      overallChoices: [],
      sameChoices: [],
      userId: 1
    };
    this.pushToArray = this.pushToArray.bind(this);
    this.matchArrays = this.matchArrays.bind(this);
    const config = {
      apiKey: "AIzaSyBbnM7d8pSNpiQXPI8SdB6IavUsms3c4CA",
      authDomain: "whaddya-749c2.firebaseapp.com",
      databaseURL: "https://whaddya-749c2.firebaseio.com",
      projectId: "whaddya-749c2",
      storageBucket: "whaddya-749c2.appspot.com",
      messagingSenderId: "1076593373955",
      appId: "1:1076593373955:web:d3c780d58b42240290af36",
      measurementId: "G-8JW4C0VCYQ"
    };  
    firebase.initializeApp(config);
    this.fb = firebase.database();

    const authConfig = {

      apiKey: "AIzaSyCWEWGI6hPtEazts0d60Jz-M69QeNRFSko",
      authDomain: "whaddya2-a6bbd.firebaseapp.com",
      databaseURL: "https://whaddya2-a6bbd.firebaseio.com",
      projectId: "whaddya2-a6bbd",
      storageBucket: "whaddya2-a6bbd.appspot.com",
      messagingSenderId: "1035641147806",
      appId: "1:1035641147806:web:fad0d107c5419177c6868f"

    };
      // Initialize Firebase
    firebase.initializeApp(authConfig, "Other");
    this.authFb = firebase.database();
  }

  // firebase on child added
  // update the state array of choices for player1/2 -> overallchoices
  // do a comparison of all objects in array, if player1/2 chooose same, 
  // then do your functionality for that here
  // for loop required for comparison
  async componentDidMount() {
    // check and see if user 1 or user 2
    try {
      this.authFb.ref().on("value", snapshot => {
        var currentUsers = snapshot.val();
        if(currentUsers != undefined && currentUsers != null) {
          if(currentUsers.userOne && currentUsers.userTwo) {
            this.authFb.ref().set({ userOne: true });
          } else {
            this.authFb.ref().set({ userOne: true, userTwo: true });
            this.setState({
              userId: 2
            });
          }
        } else {
          this.authFb.ref().set({ userOne: true });
        }
      });
    } catch(e) {
      console.log("Error: " + e);
    }



    try {
      this.fb.ref().on("child_added", childSnapshot => {
        
        var genreSelection = childSnapshot.val();
        var stateChoices = this.state.overallChoices;
        genreSelection.key = childSnapshot.key;
        stateChoices.push(genreSelection);

        this.setState({
          overallChoices: stateChoices
        });

      });

    } catch(error) {
      console.log("There was a problem with firebase");
    }
  }

  compareGenreChoices() {
    // do a comparison between what is in the state overallChoices array
    // check to see if player 1 and 2 selected the same genre
    var sameChoices = [];
    var playerOneChoices = [];
    var playerTwoChoices = [];
    this.state.overallChoices.map(function(choice) {
      if(choice.userId === 1) {
        playerOneChoices.push(choice);
      } else {
        playerTwoChoices.push(choice);
      }
    });

    for(var i = 0; i < playerOneChoices.length; i++) {
      for(var j = 0; j < playerTwoChoices.length; j++) {
        if(playerOneChoices[i].genreId === playerTwoChoices[j].genreId) {
          sameChoices.push({
            genreId: playerOneChoices[i].genreId
          })
        }
      }
    }

    // we now have same choices array
    this.setState({
      sameChoices: sameChoices
    })
  }

  removeFromFirebase = (id) => {
    console.log("Removing... " + id);
    console.log(this.state.overallChoices);
    for(var i = 0; i < this.state.overallChoices.length; i++) {
      if(this.state.overallChoices[i].genreId === parseInt(id) && this.state.overallChoices[i].userId === this.state.userId) {
        console.log("Removing key... " + this.state.overallChoices[i].key);
        this.fb.ref().child(this.state.overallChoices[i].key).remove();
      }
    }
  }

  // need a method (pushtofirebase?) for when genre selected
  // this will add a child to firebase with genre selection for player(id) 1/2
  pushToFirebase = (name, selected, id) => {
    var genreChoice = {
      userId: 1,
      genreId: id
    }

    this.fb.ref().push(genreChoice);
  }


  pushToArray = (name, selected, id) => {
    let genres = this.state.selectedgenres;
    let includesName = genres.includes(name);
    // console.log("In Array? - " + includesName);
  
    
    if (includesName) {
      let i = genres.indexOf(name);
      // console.log(i);
      genres.splice(i, 1);
      this.removeFromFirebase(id);
      this.setState({ selectedgenres: genres });
      // console.log("Selected Genres:" + genres);
    } else {
      genres.push(name);
      this.pushToFirebase(name,selected,id);
      this.setState({ selectedgenres: genres });
      // console.log("Selected Genres:" + genres);
    }
  };

  //sendQuery = (query) => { }
  matchArrays = () => {
    let genres = this.state.selectedgenres;
    genres.sort();
    // console.log("Sorted: " + genres);
    let user2genres = ["Action", "Comedy", "Romance", "Science Fiction"];
    user2genres.sort();
    let mergedArray = [];
    for (var i = 0; i < genres.length; i++) {
      for (var j = 0; j < user2genres.length; j++) {
        if (genres[i] === user2genres[j]) {
          mergedArray.push(genres[i]);
        }
        // console.log("Merged Array: " + mergedArray);
      }
    }
    // console.log("test");
    console.log("Merged Array: " + mergedArray);
//sendQuery(mergedArray)
  };

  render() {
    return (
      <div className="genre-container">
            <h2>What kind of movie are you in the mood to watch?</h2>
            {this.state.cards.map((card) => {
              return (
                <Card
                  onClick={this.toggleState}
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  selected={card.selected}
                  selectedimage={card.selectedimage}
                  pushToArray={this.pushToArray}
                />
              );
            })}
               <button onClick={this.matchArrays}>Submit</button>
            </div>
    );

  }
}

export default Genres;
