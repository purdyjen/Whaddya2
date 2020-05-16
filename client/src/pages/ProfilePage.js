import React, { Component} from "react";
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
      message: ''
    
  }
}
//   this.socket = io();

//   this.socket.on('RECEIVE_MESSAGE', function(data){
//     //addMessage(data);
//     console.log(data);
// });

// const addMessage = data => {
//     console.log(data);
//     //this.setState({messages: [...this.state.messages, data]});
//     //console.log(this.state.messages);
// };

// this.sendMessage = ev => {
//     ev.preventDefault();
//     this.socket.emit('SEND_MESSAGE', {
//         author: this.state.username,
//         message: this.state.message
//     })
//     this.setState({message: ''});
// }

// } 

//   chooseFriend = () => {
//     console.log("friend click");
//     this.setState({message: true});
//     //console.log(message);
//   }

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
        
        <h2>Friends</h2>
        
        {this.state.users.length ? (
            <div>
            {this.state.users.map((user) =>(
              <Friends key={user._id}>
                {user.username}
                {/* <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                <br/>
                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button> */}
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