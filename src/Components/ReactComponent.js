import React from "react";
import axios from "axios";
class ClassBasedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        } 
        console.log("constructor");
    }
    static getDerivedStateFromProps = (nextProps, state) => {
        console.log("getDerivedStateFromProps", nextProps, state);
        if (state.name !== nextProps.name) {
            return {
                name: nextProps.name
            }
        }
        
    }
    componentDidMount () {
        console.log("getDerivedStateFromProps")
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        console.log("render");
        return (
            <div> This is a class based Component - {this.state.name}</div>
        )
    }
}

export default ClassBasedComponent;