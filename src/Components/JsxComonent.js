import React from 'react';

export default function JsxComponent () {
    const name = "React";
    const greeting = (user) => {
        if (user) {
            return <div>Hello, {user}</div>
        } else {
            return <div>Hello stranger</div>
        }
    }
    const element = <h1 className="title">Hello World, {name}</h1>;
    // const element2 = React.createElement({
    //     type: "h1",
    //     props: {
    //         className: "title",
    //         children: "Hello World,"
    //     }
    // })
    return (
        <div>
            {element}
            {greeting("abc")}
            {greeting()}
        </div>
    )
}
