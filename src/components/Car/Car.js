import {useDispatch} from "react-redux";
import {removeCar, updateButton} from "../../store/index";


const Car = ({car}) => {

    const {id,model,price,year} = car;

    let dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(removeCar({id}))}>Delete car</button>
            <button onClick={()=>dispatch(updateButton({car}))}>Edit car</button>
        </div>
    );
};

export {Car};