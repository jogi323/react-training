import React, { Component, Fragment } from 'react'

export default class ErrorBoundaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: null
        }
    }
    // static getDerivedStateFromError(error, info) {
    //     console.log(error, info);
    //     return {
    //         hasError: true,
    //         info: info
    //     }
    // }

    componentDidCatch = (error, info) => {
        console.log(error, info);
        this.setState({info: info, hasError: true})
    }
    render() {
        if(this.state.hasError) {
            return <Fragment>
                <h2>Something went wrong</h2>
                <p>{this.state.info.componentStack}</p>
            </Fragment>
        } else {
           return this.props.children;
        }
    }
}
