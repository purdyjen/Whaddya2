 import axios from "axios";

export default {
 // Gets all friends
    getUsers: function() {
        return axios.get("/api/users");
    },
  // Gets the friend with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
  // Deletes the friend with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
  // Saves a friend to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    }
};
