import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

import JsxComonent from "./Components/JsxComonent";

import RenderElements from "./Components/RenderElements";
import ClassBasedComponent from "./Components/ReactComponent";
import FunctionalComponent from "./Components/ReactFunComponent";
import CssComponent from "./Components/CssComponent/CssComponent";
import StateComponent from "./Components/StateComponent";
import LifeCyclesComponents from "./Components/LifeCyclesComponents";
import ConditionalRenderingComponent from "./Components/conditionalRenderingComponent";
import ListComponent from "./Components/ListComponent";
// import FormsComponent from "./Components/FormsComponent";
import ProductsContext from "./Components/ProductsContext";
import PropTypeComponent from "./Components/PropTypeComponent";
import UncontrolledComponent from "./Components/uncontrolledComponent";
import FragmentComponent from "./Components/FragmentComponent";
import HooksComponent from "./Components/Hooks/HooksComponent";

import { Switch, Route, Link } from "react-router-dom";

import DashboardComponent from "./Components/Dashboard/DashboardComponent";



const FormsComponent = lazy(()=> import("./Components/FormsComponent"));

// import FormValidationsComponent from "./Components/FormValidationComponent";

const FormValidationsComponent = lazy(()=> import("./Components/FormValidationComponent"));

// import ProductsListComponents from "./Components/Products/ProductsListComponents.js";

const ProductsListComponents = lazy(()=> import("./Components/Products/ProductsListComponents"));
const TodoComponent = lazy(()=> import("./Components/Todo/TodoComponent"));


function App() {
  const [name, setName] = useState("Angular");
  const [time, updateTime] = useState(new Date().toLocaleTimeString())
  const handleChange = () => {
    setName("Angular");
    console.log(name)
  }
  const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
  ];
  // const ProductsContext = React.createContext(PRODUCTS);
  const element = <h1>Heading, {name}</h1>;
  const onSubmit = (data, tech) => {
    console.log("data from chldren component", data, tech);
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand"><Link to="/">Navbar</Link></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <a className="nav-link"> */}
                <Link to="/"> Home </Link>
                {/* <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
                <Link to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/hooks">Hooks</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard">Dash board</Link>
            </li>
            <li className="nav-item">
              <Link to="/todo">To Do List</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={FormValidationsComponent} />
          <Route exact path="/products" component={ProductsListComponents} />
          <Route path="/hooks" component={HooksComponent} />
          <Route path="/products/:id" component={FormsComponent}/>
          <Route path="/dashboard"component={DashboardComponent}/>
          <Route path="/todo"component={TodoComponent}/>
          <Route path="*" render={()=>{return <h1>No matched route</h1>}}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

