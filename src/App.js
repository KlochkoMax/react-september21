import './App.css';
import Filter from "./components/Filter/Filter";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {userServices} from "./services/user.services";

function App() {

    let [users, setUsers] = useState([]);
    let [filteredArr, setFilteredArr] = useState([]);


    useEffect(()=>{
        userServices.getAllUsers().then(value => {
            setUsers([...value])
            setFilteredArr([...value])
        })
    },[])


    let filter = (data) => {
        let filterUser = [...users]

        if (data.name){
            filterUser = filterUser.filter(user => user.name.includes(data.name))
        }

        if (data.username){
            filterUser = filterUser.filter(user => user.username.includes(data.username))
        }

        if (data.email){
            filterUser = filterUser.filter(user => user.email.includes(data.email))
        }
        setFilteredArr(filterUser)
    }


  return (
    <div className="App">
        <Filter filter = {filter}/>
        <Users users = {filteredArr}/>
    </div>
  );
}

export default App;
