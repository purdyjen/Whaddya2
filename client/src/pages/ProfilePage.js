import React, { Component} from "react";
import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";
import Friends from "../components/Friends";



class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: [],
      message: ''
    
  }
}

  // componentDidMount(){
  //   this.loadUsers();
  // }
  
  // loadUsers = () => {
  //   API.getUsers().then((results) =>
   
  //     this.setState({
  //       users: results.data
  //     })
  //   )
  //  .catch((err) => console.log(err));
  // //console.log(users);
  //   }
render() {
    return (
      <div>
        <LogoutBtn />
        
        <h2>Friends</h2>
        
        {this.state.users.length ? (
            <div>
            {this.state.users.map((user) =>(
              <Friends key={user._id}>
                {user.username}
               
              </Friends>
            ))}
            </div>
          ):(
          <h6>No Friends</h6>
          )} 
        <Genres />
     </div>
    );
  }
}
  export default ProfilePage;