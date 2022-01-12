import React, {useEffect, useState} from 'react';
import Launch from "./Launch";

const Launches = () => {

    let [launches, setLaunches]= useState([])

    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value =>  {
                setLaunches(value);
            })

    },[])
    // console.log(launches)
    return (
        <div>
            {
                launches.map(key =>{
                    if ( key.launch_year !== '2020'){
                        return (<Launch key = {key.flight_number} launch={key}/>   )
                    }
                    }
                )}
        </div>
    );
};

export default Launches;