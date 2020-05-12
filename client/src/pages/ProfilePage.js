import React, { Component } from "react";
import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";
import Friends from "../components/Friends";

class ProfilePage extends Component {
  state = {
    users: [],
  };
  

  componentDidMount(){
    this.loadUsers();
  }
  loadUsers = () => {
    API.getUsers()
    .then((res) =>
      this.setState({
        users: res.data
      })
    )
    .catch((err) => console.log(err));
    console.log(users);
  }
render() {
    return (
      <div>
          <LogoutBtn />
          <Genres />

         {this.state.users.length ? (
            <div>
            {this.state.users.map(result =>(
              <Friends key={result.id}>
              {result.name}

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