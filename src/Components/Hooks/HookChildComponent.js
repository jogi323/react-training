import React, {useContext, useReducer, useRef, useState, useEffect} from 'react';
import { connect } from "react-redux";

import ProductsContext from "../ProductsContext";
import { CounterIncrement, CounterDecrement } from './../../Actions/CounterActions';

const initialState = {name: "", password:"", count: 0};

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count + 1 }
        case "decrement":
            return {...state, count: state.count - 1}
        case "inputChange":
            console.log(action, state)
            return {...state,[action.key]: action.value}
        default:
            console.log("error");
    } 
}

function HookChildComponent(props) {
    const data = useContext(ProductsContext);
    const inputRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const setFocus = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.value="test";
    }
    const [Counter, setCounter] = useState(props.Counter.Count)

    const incrementCount = () => {
        props.CounterIncrement("jogi");
    }
    const decrementCount = () => {
        props.CounterDecrement("jogi");
    }
    console.log(props);
    useEffect(()=>{
        setCounter(props.Counter.Count);
    }, [props.Counter.Count])
    return (
        <div>
            <input type="text" name="name" value={state.name} onChange={(e) => dispatch({type: "inputChange", key: e.target.name, value: e.target.value})} ref={inputRef}/>
            <input type="password" name="password" value={state.password} onChange={(e) => dispatch({type: "inputChange", key: e.target.name, value: e.target.value})}/>
            {/* <button onClick={()=>dispatch({type: "increment"})}>increment</button>
            <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button> */}
            The count is {props.Counter.Count} --- State value - {Counter}
            <button onClick={incrementCount}>Increement</button>
            <button onClick={decrementCount}>Decrement</button>
            <a></a>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        Counter: state.Counter
    }
}

const mapDispatchStateToProps = (dispatch) => {
    return {
        CounterIncrement: (data) => dispatch(CounterIncrement(data)),
        CounterDecrement: (data) => dispatch(CounterDecrement(data)),
        // updateUserDetails: (data) => dispatch(updateUserDetails(data))
    }
}

export default connect(mapStateToProp, mapDispatchStateToProps)(HookChildComponent);