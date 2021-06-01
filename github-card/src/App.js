
import './App.css';
import React from 'react';
import axios from "axios";
import CardBuilder from "./CardBuilder.js"
import Form from "./Form.js"
import MyFollowing from "./Following.js"



// needs to have a form field that takes in username and sets username to state. this username is then passed parametrically into the github url to pull that users info as well as that users followers info.
// Data should display in such a way that it looks like a card with info such as name, image, location, followerCount, followingCount etc. 
// will need a search button to execute the api call once the username input has been filled. 
class App extends React.Component {

  state = {
  myUsername: "djaden927",
  userDetails: {},
  followers: [],
  reqUsername: ""
}

handleClick = (e) => {
  e.preventDefault();
  console.log(e.target.value)
  this.setState({
    myUsername: this.state.reqUsername,
  })
}

handleChange = (e) => {
  this.setState({
      reqUsername: e.target.value
  })
}


componentDidMount(){
  axios.get(`https://api.github.com/users/${this.state.myUsername}`)
  .then(res => {
    console.log(res.data)
    this.setState({
      userDetails: res.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}

componentDidMount(){
  axios.get(`https://api.github.com/users/${this.state.myUsername}/followers`)
  .then(res => {
    console.log(res.data)
    this.setState({
      followers: res.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}

// componentDidUpdate(){
//   axios.get(`https://api.github.com/users/${this.state.myUsername}`)
//   .then(res => {
//     console.log(res.data)
//     this.setState({
//       userDetails: res.data
//     })
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

componentDidUpdate(){
  axios.get(`https://api.github.com/users/${this.state.myUsername}/followers`)
  .then(res => {
    console.log(res.data)
    this.setState({
      followers: res.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}


render(){
    return (
      <div className="App">
        <h1>Github user info</h1>
        <CardBuilder details={this.state.userDetails}/>
        <MyFollowing followers={this.state.followers}/>
        <Form handleClick={this.handleClick} handleChange={this.handleChange} reqUsername={this.state.reqUsername}/>
      </div>
    );
  }
}

export default App;
