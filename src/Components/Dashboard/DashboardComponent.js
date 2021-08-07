import React, { useState} from 'react';
import { Switch, Route } from "react-router-dom";
import { useLocation, useHistory, useRouteMatch } from 'react-router';
import UserDetailsComponent from "./UserDetailsComponent";
import FunctionalComponent from "../ReactFunComponent";

import { connect } from "react-redux";

function DashboardComponent(props) {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            DashBoard Component {props.Counter.Count} --- 

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
export default connect(mapStateToProps)(DashboardComponent);