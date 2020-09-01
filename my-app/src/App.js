import React from 'react';
import './App.css';
import axios from 'axios'
import Followers from './Followers'

class App extends React.Component {
  state ={
    users: [],
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
    <div className='mycardMaker'>
      <h3 className="userName">{this.state.users.name}</h3>
      <img src={this.state.users.avatar_url} alt='profile pic'/>
      <p>Username: {this.state.users.login}</p>
      <p>Bio: {this.state.users.bio}</p>
      <p>Location: {this.state.users.location}</p>
      <p>Followers: {this.state.users.followers}</p>
    </div>
      <Followers/>
    </div>
  );
}
}
export default App;
