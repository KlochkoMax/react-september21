import './App.css';

import Users from "./components/Users/Users";
import {useState} from "react";
import UserDetails from "./components/Details/UserDetails";
import Post from "./components/Posts/Post";
import css from './App.module.css'
import Posts from "./components/Posts/Posts";



function App() {

  let [user, setUser] = useState(null);

  let getUser = (user) => {
        setUser(user)
  }



  let [id, setId]= useState(null)

  let getId = (id) => {
        setId(id)
  }



  return (
    <div className={css.app}>
        <Users getUser = {getUser}/>
        {user &&<UserDetails user={user} getId={getId} />}
        {id && <Posts id ={id}/>}
    </div>
  );
}

export default App;
