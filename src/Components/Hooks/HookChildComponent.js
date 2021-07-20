import React, {useContext, useReducer, useRef} from 'react';

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

export default function HookChildComponent(props) {
    // const data = useContext("");
    // console.log(data);
    const inputRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const setFocus = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.value="test";
    }
    return (
        <div>
            <input type="text" name="name" value={state.name} onChange={(e) => dispatch({type: "inputChange", key: e.target.name, value: e.target.value})} ref={inputRef}/>
            <input type="password" name="password" value={state.password} onChange={(e) => dispatch({type: "inputChange", key: e.target.name, value: e.target.value})}/>
            <button onClick={()=>dispatch({type: "increment"})}>increment</button>
            <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
            The count is {state.count}
            <button onClick={setFocus}>Set focus</button>
        </div>
    )
}
