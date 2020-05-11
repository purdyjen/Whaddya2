import React, { Component } from "react";

// import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";

class ProfilePage extends Component {
render() {
    return (
      <div>

          <LogoutBtn />
          
            <Genres />
      </div>
    );
  }
}
  export default ProfilePage;