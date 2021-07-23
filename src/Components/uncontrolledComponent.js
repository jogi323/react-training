import React, { Component, createRef } from 'react'

export default class UncontrolledComponent extends Component {
    constructor (props) {
        super(props)
        this.inputRef = createRef(null);
    }
    handleSubmit = () => {
        console.log(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.inputRef} />
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}
