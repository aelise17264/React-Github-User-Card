import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  state ={
    users: [],
    newCard: '',
    error: ''
  };
  
componentDidMount(){
  axios.get('https://api.github.com/users/aelise17264')
  .then(res => {
    console.log(res.data)
    this.setState({
      users: res.data
    })
  })
  .catch (error =>
    console.log('error'))
}


  render(){
  return (
    <div className="App">
     <h1>Github User Cards</h1>
    <div className='cardMaker'>
      <h3 className="userName">{this.state.users.name}</h3>
      <img src={this.state.users.avatar_url}/>
  <p>Bio: {this.state.users.bio}</p>
  <p>Location: {this.state.users.location}</p>
  <p>Twitter Handle: {this.state.users.twitter_username}</p>
  <p>Followers: {this.state.users.followers}</p>
    </div>

    </div>
  );
}
}
export default App;
