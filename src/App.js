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
  console.log(user)
  let [postsId, setPostsId]= useState(null)

  let getId = (id) => {
        setPostsId(postsId)
  }
  console.log(postsId)

  return (
    <div className={css.app}>
        <Users getUser = {getUser}/>
        <UserDetails user={user} />
        {/*<Posts id={[postsId]}/>*/}
    </div>
  );
}

export default App;
