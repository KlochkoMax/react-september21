import React, {useState} from 'react';

const Filter = ({filter}) => {

    let [formData, setFormData] = useState({name:'', username:'', email:''})

    let find = (e) => {
        filter(formData)
        e.preventDefault()
    }

    let change = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={find}>
                <label >Name<input type="text" name={'name'} value={formData.name} onChange={change}/></label>
                <label >Username<input type="text" name={'username'} value={formData.username} onChange={change}/></label>
                <label >Email<input type="text" name={'email'} value={formData.email} onChange={change}/></label>
                <button>Find</button>
            </form>
        </div>
    );
};

export default Filter;