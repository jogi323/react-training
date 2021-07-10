import React, { Component } from 'react';
import "./CssComponent.css";

export default class CssComponent extends Component {
    
    render() {
        const h1Styles = {
            color: "red", backgroundColor: "blue"
        }
        return (
            <div>
                <h1 style={h1Styles}>Hello World !!!</h1>
                <h2>Testing git</h2>
                <p className="content">This is from a paragraph tag and using external CSS </p>
            </div>
        )
    }
}

