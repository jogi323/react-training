import logo from './logo.svg';
import './App.scss';
import React , {useState, useEffect} from "react";

import JsxComonent  from "./Components/JsxComonent";

import RenderElements from "./Components/RenderElements";
import ClassBasedComponent from "./Components/ReactComponent";
import FunctionalComponent from "./Components/ReactFunComponent";
import CssComponent from "./Components/CssComponent/CssComponent";
import StateComponent from "./Components/StateComponent";
import LifeCyclesComponents from "./Components/LifeCyclesComponents";
import ConditionalRenderingComponent from "./Components/conditionalRenderingComponent";
import ListComponent from "./Components/ListComponent";
// import FormsComponent from "./Components/FormsComponent";
import FormValidationsComponent from "./Components/FormValidationComponent";
import FragmentComponent from "./Components/FragmentComponent";

function App() {
  const [name, setName] = useState("Angular");
  const [time, updateTime] = useState(new Date().toLocaleTimeString())
  const handleChange = () => {
    setName("React");
  }
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
  const element = <h1>Heading, {name}</h1>;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateTime(new Date().toLocaleTimeString())
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval)
  //   }
  // });
  const onSubmit = (data, tech) => {
    console.log("data from chldren component", data, tech);
  }
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
      {/* <button onClick={handleChange} className="btn btn-primary">change name tttyfy</button>
          {name} */}
      {/* <JsxComonent />
      <RenderElements />
      <ClassBasedComponent name={name}/>
      <FunctionalComponent /> -  <CssComponent />
      <CssComponent /> */}
      {/* <StateComponent appName={name}/> */}
      {/* <LifeCyclesComponents  /> */}
      {/* <ConditionalRenderingComponent loggedIn={false} />
      <ListComponent />
      <ul>
        <li><a>abc</a></li>
        <li><a>abcd</a></li>
        <li><a>abcdf</a></li>
      </ul> */}   
      {/* <FormsComponent /> */}
     
      <FormValidationsComponent name="abc" onFormSubmit={(data)=>onSubmit(data, 1)} />
      <FragmentComponent />
    </div>
  );
}

export default App;

