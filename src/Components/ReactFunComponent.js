import React, {useState, useEffect} from "react";

function FunctionalComponent (props) {
    const [name, setname] = useState(props.value);
    useEffect(() => {
        console.log("useEffect")
        setname("React")
    }, [props])
    console.log(props)
 return (
    <div>
        <h1>This is a functional component</h1>
        <p>test</p>
        {name}
    </div>
 )
}
export default FunctionalComponent;