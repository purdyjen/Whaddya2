 import axios from "axios";

export default {
 // Gets all friends
    getFriends: function() {
        return axios.get("/api/friends");
    },
  // Gets the friend with the given id
    getFriend: function(id) {
        return axios.get("/api/friends/" + id);
    },
  // Deletes the friend with the given id
    deleteFriend: function(id) {
        return axios.delete("/api/friends/" + id);
    },
  // Saves a friend to the database
    saveFriend: function(friendData) {
        return axios.post("/api/friends", friendData);
    }
};
