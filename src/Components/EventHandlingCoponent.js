import React, {useState} from "react";
function EventHandling (props) {
    const [name, setName] = useState("React")
    const handleClick = (e) => {
        setName("Angular");
    }
    return (
        <div>
            <button onClick={handleClick}>Change name</button>
            {name}
        </div>
        
    )
}

export default EventHandling