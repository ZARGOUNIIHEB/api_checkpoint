import UserList from './UserList';
import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { setUsersList } from "./Redux/UsersSlice";

function App() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.users)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => dispatch(setUsersList(res.data)))
      .catch(err => console.log(err))
  }, []);


  console.log('data from state:', list);
  return (
    <div className="App">
      <UserList users={list} />
    </div>
  );
}

export default App;
