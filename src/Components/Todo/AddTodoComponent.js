import React, { Fragment, useState } from 'react'

export default function AddTodoComponent(props) {
    // console.log(props)
    const [title, setTitle ] = useState("");
    const [desc, setDesc ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitTodo(title, desc);
        setTitle("");
        setDesc("");
    }

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        if (key === "title") {
            setTitle(value);
        } else if (key === "desc") {
            setDesc(value);
        }
    }
    return (
        <Fragment>
            <h3>{props.editIndex === -1 ? "Add" : "Edit"} Todo Items</h3>
            <form className="container col-6">
                <div className="form-group">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input name="title" type="text" className="form-control" id="exampleInputTitle" placeholder="Enter Todo Title" value={title || (props.editIndex !== -1 ? props.editTodo.title : "")} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc || (props.editIndex !== -1 ? props.editTodo.description : "")} onChange={handleChange} placeholder="Enter Todo description"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={(!title || !desc) && props.editIndex === -1}>{props.editIndex === -1 ? "Submit" : "Save"}</button>
            </form>
        </Fragment>
    )
}
