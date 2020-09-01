import React from 'react';
import './App.css';
import axios from 'axios'


class Followers extends React.Component {
    state ={
        newCard: [],
        error: ''
      };
      // https://api.github.com//aelise17264/followers

      componentDidMount(){
        axios.get('https://api.github.com/users/aelise17264/followers')
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
             {this.state.newCard.map((card) => (
               <>
               <div className='mycardMaker'>
                <h3 className="userName"> {card.login}</h3>
                  <img src={card.avatar_url} alt="follower avatar"/>
                 <p>Organizations: {card.organizations_url}</p>
                 <p>User's URL: {card.followers_url}</p> 
                 </div>
                 </>
                 )
                  )}
           </div>
           
        )
        }

}
export default Followers