import React from 'react';
import './App.css';
import axios from 'axios'


class Followers extends React.Component {
    state ={
        newCard: [],
        error: ''
      };

      componentDidMount(){
        axios.get('https://api.github.com//aelise17264/followers')
        .then(res => {
          console.log(res.data)
          this.setState({
            newCard: res.data
          })
        })
        .catch (error =>
          console.log('error'))
     
       }
       
       
         render(){
             console.log('rendering', this.state.newCard)
         return (
             
           <div className='followerCards'>
             {/* {this.state.newCard.map((card) => (
                <h3 className="userName">{card.name}</h3>
                  <img src={card.avatar_url}/>
                 <p>Bio: {card.bio}</p>
                 <p>Location: {card.location}</p>
                 <p>Twitter Handle: {card.twitter_username}</p>
                 <p>Followers: {card.followers}</p> 
                 )
                  )} */}
           </div>
           
         );
       }

}
export default Followers