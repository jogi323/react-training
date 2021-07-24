import React, { useState, useEffect, lazy, Suspense } from 'react';
// import HookChildComponent from "./HookChildComponent";
import { useLocation, useHistory, useParams } from 'react-router';

const HookChildComponent = lazy(()=> import("./HookChildComponent"));

export default function HooksComponent(props) {
  const [ name, setname ] = useState("Angular");
  const [ count, setcount ] = useState(0);
  const [ data, setdata ] = useState([]);
 // ComponentDidmount, componentDidUpdate & ComponentWillUnmount
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  console.log(history, location, params);
  useEffect(() => {
    // console.log(props);
    //get data GET
        fetch("./JSON/products.json")
            .then((res) => res.json())
            .then((data => setdata(data)));
  },[]);

  useEffect(() => {
    sayHello();
  }, [name])
  const sayHello = () => {
    console.log(`Hello from ${name}`)
  }
  const redirecToHome = () => {
    history.push("/");
  }
  return (
    <div>
      {name}
      <button onClick={()=>setname("Vue")}>CHANGE NAME</button>
      <button onClick={()=>redirecToHome()}>Home</button>
      {/* <button onClick={()=>setcount(count + 1)}>Count increment</button>{count} */}
      <HookChildComponent product={props.product}/>
    </div>
  )
}
