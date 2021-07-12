import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from "react";

import JsxComonent  from "./Components/JsxComonent";

import RenderElements from "./Components/RenderElements";
import ClassBasedComponent from "./Components/ReactComponent";
import FunctionalComponent from "./Components/ReactFunComponent";
import CssComponent from "./Components/CssComponent/CssComponent";
import StateComponent from "./Components/StateComponent";
import LifeCyclesComponents from "./Components/LifeCyclesComponents";

function App() {
  const [name, setName] = useState("Angular");
  const [time, updateTime] = useState(new Date().toLocaleTimeString())
  const handleChange = () => {
    setName("React");
  }
  const element = <h1>Heading, {name}</h1>;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateTime(new Date().toLocaleTimeString())
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval)
  //   }
  // });
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  
          <button onClick={handleChange}>change name tttyfy</button>
          {name}
        </a> 
      </header> */}
      {/* <h1>Hello world !!!</h1> */}
      {/* <JsxComonent /> */}
      {/* <RenderElements /> */}
      {/* the time is {time} */}
      <button onClick={handleChange}>change name tttyfy</button>
          {name}
      {/* <JsxComonent />
      <RenderElements />
      <ClassBasedComponent name={name}/>
      <FunctionalComponent /> -  <CssComponent />
      <CssComponent /> */}
      <StateComponent appName={name}/>
      <LifeCyclesComponents  />
    </div>
  );
}

export default App;

