import './App.css';
import {useReducer} from "react";

 let reducer = (state, action) => {

     switch (action.type){
         case 'inc':
             return {...state, count1: state.count1 + 1}
         case 'dec':
             return {...state, count1: state.count1 - 1}
         case 'reset':
             return {...state, count1: state.count1 = 0}
     }

     switch (action.type){
         case 'increase':
             return {...state, count2: state.count2 + 10}
         case 'decrease':
             return {...state, count2: state.count2 - 10}
         case 'initial':
             return {...state, count2: state.count2 = 10}
     }

     switch (action.type){
         case 'inc_100':
             return {...state, count3: state.count3 + 100}
         case 'dec_100':
             return {...state, count3: state.count3 - 100}
         case 'ini_100':
             return {...state, count3: state.count3 = 100}
     }



   return state
 }


function App() {

  let [state, dispatch] = useReducer(reducer, {count1: 0, count2:10, count3:100});

  return (
    <div className="App">

        <div>
            <div>{state.count1}</div>
            <button onClick={()=> dispatch({type:'inc'})}>increment</button>
            <button onClick={()=> dispatch({type:'dec'})}>decrement</button>
            <button onClick={()=> dispatch({type:'reset'})}>reset</button>
        </div>

        <div>
            <div>{state.count2}</div>
            <button onClick={()=> dispatch({type:'increase'})}>increase by 10</button>
            <button onClick={()=> dispatch({type:'decrease'})}>decrease by 10</button>
            <button onClick={()=> dispatch({type:'initial'})}>initial</button>
        </div>

        <div>
            <div>{state.count3}</div>
            <button onClick={()=> dispatch({type:'inc_100'})}>increase by 100</button>
            <button onClick={()=> dispatch({type:'dec_100'})}>decrement by 100</button>
            <button onClick={()=> dispatch({type:'ini_100'})}>initial</button>
        </div>

    </div>
  );
}

export default App;
