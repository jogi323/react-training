import React, { useState } from 'react'

export default function SearchTodoComponent(props) {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="container col-6">
            Search todo items:
            <div className="form-group">
                <input name="searchText" type="text" className="form-control" id="exampleInputTitle" placeholder="Enter text to search todo items..." value={props.searchText} onChange={(e)=>props.onSearchTextChange(e)}/>
            </div>
        </div>
    )
}
