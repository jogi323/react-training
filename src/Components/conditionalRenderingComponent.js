import React, { Component } from 'react'

const LoginComponent = () => {
    return <button>Login</button>
}

const LogoutComponent = () => {
    return <button>Logout</button>
}

const ConditionalRenderingComponent = (props) => {
    const greeting = props.greeting;
    // if (greeting === "morning") {
    //     return "Good Morning"
    // } else {
    //     return "Good Afternoon"
    // }
    return (
        props.loggedIn && <div>Testing</div>
    )
    // if (props.loggedIn) {
    //     return <LogoutComponent />
    // } else {
    //     return <LoginComponent />
    // }
}

export default ConditionalRenderingComponent;