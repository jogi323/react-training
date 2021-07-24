import React from 'react';
import { Switch , Route } from "react-router-dom";
import { useLocation, useHistory, useRouteMatch } from 'react-router';
import UserDetailsComponent from "./UserDetailsComponent";
import FunctionalComponent  from "../ReactFunComponent";

export default function DashboardComponent() {
    const history = useHistory();
    let {path, url} = useRouteMatch();
    return (
        <div>
            DashBoard Component.
            <p onClick={()=>history.push("/dashboard/userDetails")}>Jogi</p>
            <Switch>
                <Route exact path={path} component={FunctionalComponent}  />
                <Route path={`${path}/userDetails`} component={UserDetailsComponent} />
            </Switch>
        </div>
    )
}
