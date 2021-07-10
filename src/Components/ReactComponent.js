import React from "react";

class ClassBasedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        } 
    }
    render() {
        return (
            <div> This is a class based Component</div>
        )
    }
}

export default ClassBasedComponent;