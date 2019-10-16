import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddFriend = props => {
    console.log(`add`, props)
    //useState hook in browser
      const[friend, setFriend] = useState({id:"", name:"", age:"", email:""})
      const[loading, setLoad] = useState(false)

    //   useEffect(() => {
    //     axiosWithAuth()
    //       .get(
    //         "/friends"
    //       )
    //       .then(res => setFriend(res.data))
    //       .catch(err => console.log(err));
    //   }, []);

      const handleChanges = e =>{
          //name and value from input fields, sets key: value pairs
          //track changes in forms and updates
        setFriend({...friend, [e.target.name]: e.target.value})
      }

     const postFriends = () => {
        axiosWithAuth()
          .post('/friends', friend) //update added friend 
           .then(res => console.log(res.data))
          .catch(err => console.log(err));
      };

      const logValues = event => {
        event.preventDefault();
        setLoad({loading:true})
        setTimeout(() =>{
            setLoad({loading:false})
        }, 2000)
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
        <button onClick={logValues}>
            { loading && (
            <i className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
              />
            )} 
            {loading && <span>Loading Friend to Server</span>}
            {!loading && <span>Add New Friend</span>}
        </button>
      </form>
    );
  }
export default AddFriend;