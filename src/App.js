import './App.css';

import Users from "./components/Users/Users";
import {useState} from "react";
import UserDetails from "./components/Details/UserDetails";
import css from './App.module.css'




function App() {

  let [user, setUser] = useState(null);

  let getUser = (user) => {
        setUser(user)
  }

  return (
    <div className={css.app}>
        <Users getUser = {getUser}/>
        <UserDetails user={user} />
    </div>
  );
}

export default App;
