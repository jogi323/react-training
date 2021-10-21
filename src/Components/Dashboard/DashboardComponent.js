import React, { useState} from 'react';
import { Switch, Route } from "react-router-dom";
import { useLocation, useHistory, useRouteMatch } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux'

import UserDetailsComponent from "./UserDetailsComponent";
import FunctionalComponent from "../ReactFunComponent";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../Reducers/CounterSlice";
import { useEffect } from 'react';
import { fetchUsers } from './../../Reducers/UserDataSlice';

function DashboardComponent(props) {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const dispatch = useDispatch();
    const count = useSelector((state) => {console.log(state); return state.CounterSlice.value});
    const users = useSelector((state) => state.UsersData.users);
    console.log(users);
    const incrementCount = () => {
        dispatch(increment());
    }
    useEffect(()=> {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div className="container">
            DashBoard Component {count} --- 
            <button onClick={incrementCount}>Increement</button>

            <p onClick={() => history.push("/dashboard/userDetails")}>Jogi</p>
            <Switch>
                <Route exact path={path} component={FunctionalComponent} />
                <Route path={`${path}/userDetails`} component={UserDetailsComponent} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Counter: state.Counter
    }
}
export default DashboardComponent; 