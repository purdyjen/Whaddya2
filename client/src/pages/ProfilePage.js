import React, { Component } from "react";
import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";
import Friends from "../components/Friends";
import io from "socket.io-client";

class ProfilePage extends Component {
  constructor(props){
    super(props);
  this.state ={
    users: [], 
    message: "yes",
    messages: []
  };
  this.socket = io("localhost:8080");

  this.socket.on("RECEIVE_MESSAGE", function(data){
    addMessage(data);
  });

  const addMessage = data => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);
  }
  this.sendMessage = ev => {
    ev.preventDefault();
    this.socket.emit("SEND_MESSAGE", {
      message: this.state.message
    })
    this.setState({message: ''});
  }
}

  addFriend = () => {
    console.log("friend click");
  }

  componentDidMount(){
    this.loadUsers();
  }
  
  loadUsers = () => {
    API.getUsers().then((results) =>
   
      this.setState({
        users: results.data
      })
    )
   .catch((err) => console.log(err));
  //console.log(users);
    }
render() {
    return (
      <div>
        <LogoutBtn />
        <Genres />
        <h2>Friends</h2>
        {this.state.users.length ? (
            <div onClick={this.sendMessage}>
            {this.state.users.map((user) =>(
              <Friends key={user._id} >
              {user.username}

            </Friends>
            ))}
            </div>
          ):(
          <h6>No Friends</h6>
          )} 
     </div>
    );
  }
}
  export default ProfilePage;