import React, { useState, useEffect } from 'react';
import HookChildComponent from "./HookChildComponent";

export default function HooksComponent(props) {
  const [ name, setname ] = useState("Angular");
  const [ count, setcount ] = useState(0);
 // ComponentDidmount, componentDidUpdate & ComponentWillUnmount

  useEffect(() => {
    // console.log(props)
  },[props]);

  useEffect(() => {
    sayHello();
  }, [name])
  const sayHello = () => {
    console.log(`Hello from ${name}`)
  }
  return (
    <div>
      {name}
      <button onClick={()=>setname("Vue")}>CHANGE NAME</button>
      <button onClick={()=>setcount(count + 1)}>Count increment</button>{count}
      <HookChildComponent product={props.product}/>
    </div>
  )
}
