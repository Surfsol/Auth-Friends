import React from 'react';
//import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  };
  //when component mounts invoke getData()
  componentDidMount() {
    this.getFriends();
  }

  //get, then setState , filter price
  getFriends = () => {
    axiosWithAuth()
      .get('/friends')
       .then(res => {
        this.setState({
          friends: res.data
          }
        );
      })
      .catch(err => console.log(err));
  };

  formatData = () => {
    const formattedData = [];
    console.log(this.state.friends);
    this.state.friends.forEach((person) => {
        formattedData.push({
          id: person.id,
          name: person.name,
          age: person.age,
          email: person.email
        });
    });
    return formattedData;
  };

  render() {
    const friend = this.formatData();
    console.log(friend);
    return (
      <div>
        {friend.map(f =>(
        <>
        <h3>Name:{f.id}</h3>
        <h4>Age:{f.age}</h4>
        <h4>Email:{f.email}</h4>
        </>
        ))
        }
      </div>
    );
  }
}

export default Friends;
