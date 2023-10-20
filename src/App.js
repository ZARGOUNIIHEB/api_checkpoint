import UserList from './UserList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setListOfUser(res.data))
      .catch(err => console.log(err))
  }, []);


  console.log('data from state:', listOfUser);
  return (
    <div className="App">
      <UserList users={listOfUser} />
    </div>
  );
}

export default App;
