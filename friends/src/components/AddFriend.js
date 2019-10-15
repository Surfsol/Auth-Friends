import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddFriend = props => {
    console.log(`add`, props)
      const[friend, setFriend] = useState({id:"", name:"", age:"", email:""})
    

      useEffect(() => {
        axiosWithAuth()
          .get(
            "/friends"
          )
          .then(res => setFriend(res.data))
          .catch(err => console.log(err));
      }, []);

      const handleChanges = e =>{
          //name and value from input fields, sets key: value pairs
        setFriend({...friend, [e.target.name]: e.target.value})
      }

     const postFriends = () => {
        axiosWithAuth()
          .post('/friends', friend)
           .then(res => {
                this.setState({
              friends: res.data
              }
            );
          })
          .catch(err => console.log(err));
      };

      const logValues = event => {
        event.preventDefault();
        setFriend({
          id:Math.random(),
          name: "",
          age: "",
          height: ""
        });
        postFriends();
      };

      

    return (
      <form onSubmit={logValues}>
        <label>Friend's Name
        <input
          maxLength="20"
          type="text"
          name="name"
          id="sname"
          onChange={handleChanges}
          value={friend.name}
          placeholder="Name"
        />
        </label>
        {/* two ways to create labels, first way, wrapped as in above */}
        <label forHtml="sage">Age</label>
        <input
          type="number"
          name="age"
          id="sage"
          onChange={handleChanges}
          value={friend.age}
          placeholder="age"
        />
        
        <label>Email
        <input
          type="text"
          name="email"
          id="semail"
          onChange={handleChanges}
          value={friend.email}
          placeholder="email"
        />
        </label>
        <button onClick={logValues}> Add Friend</button>
      </form>
    );
  }
export default AddFriend;