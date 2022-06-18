import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import UsersInfo from "./Components/UsersInfo";

class App extends Component {
  state = { users: [] };

  async componentDidMount() {
    
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: result.data });
  }

  render() {
    return (
      <div className="container">
        {this.state.users.length > 0 ? (
          <div>
            {" "}
            <ul class="list-group">
            {this.state.users.map((user) => (
            <li class="list-group-item" key={user.id}><UsersInfo user={user}></UsersInfo></li>
            ))}
            </ul>
          </div>
        ) : (
          <>
          <div className="spinner-border text-primary" role="status">
           
          </div>
          <span className="sr-only">Loading...</span> </>
        )}
         
      </div>
    );
  }
}

export default App;
