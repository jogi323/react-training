import React, { useState, useEffect } from 'react';
import useDebounce from '../useDebounce';

export default function SearchTodoComponent(props) {
    const [searchText, setSearchText] = useState("");
    const debouncedValue = useDebounce(searchText, 1000);
    useEffect(() => {
        props.onSearchTextChange(debouncedValue);
    }, [debouncedValue])
    return (
        <div className="container col-6">
            Search todo items:
            <div className="form-group">
                <input name="searchText" type="text" className="form-control" id="exampleInputTitle" placeholder="Enter text to search todo items..." value={props.searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            </div>
        </div>
    )
}
