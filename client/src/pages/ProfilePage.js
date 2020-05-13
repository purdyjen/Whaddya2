import React, { Component } from "react";
import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";
import Friends from "../components/Friends";


class ProfilePage extends Component {
  state ={
    users: []
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
            <div onClick={this.addFriend}>
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