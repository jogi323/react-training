import React, { Fragment } from 'react'

export default function TodoListComponent(props) {
    return (
        <Fragment>
            My Todo List:
            <div className="row todo-list m-0">
                {props.todoList.map((todo, index) => {
                    if (
                        !props.searchText || (props.searchText &&
                            (todo.title.toLowerCase().indexOf(props.searchText.toLowerCase()) !== -1 || todo.description.toLowerCase().indexOf(props.searchText.toLowerCase()) !== -1))
                    ) {
                        return (
                            <div className="col-4" key={todo.title + index}>
                                <div className="card border-success mb-3 todo-content">
                                    <div className="card-header">{todo.title}</div>
                                    <div className="card-body text-success">
                                        {/* <h5 className="card-title">Success card title</h5> */}
                                        <p className="card-text">{todo.description}</p>
                                    </div>
                                    <div className="todo-buttons">
                                        <button type="button" className="btn btn-primary float-left" onClick={()=>props.editTodoItem(index)}>Edit</button>
                                        <button type="button" className="btn btn-danger float-right" onClick={()=>props.deleteTodoItem(index)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        </Fragment>
    )
}
