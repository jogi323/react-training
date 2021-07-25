import React, { lazy, useState } from 'react';

const AddTodoComponent = lazy(()=> import("./AddTodoComponent"));
const SearchTodoComponent = lazy(()=> import("./SearchTodoComponent"));
const TodoListComponent = lazy(()=> import("./TodoListComponent"));

export default function TodoComponent() {
    const [todoList, setTodoList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [editIndex, setEditIndex ] = useState(-1);

    const onSubmitTodo = (title, desc) => {
        if (editIndex !== -1) {
            let list = [...todoList];
            list[editIndex].title = title ? title : list[editIndex].title;
            list[editIndex].description = desc ? desc : list[editIndex].description;
            setTodoList(list);
            setEditIndex(-1);
        } else {
            const obj = {
                title: title,
                description: desc
            };
            let newTodoList = [...todoList];
            newTodoList.push(obj);
            setTodoList(newTodoList);
        }
    }

    const onSearchTextChange = (e) => {
        setSearchText(e.target.value);
    }

    const onDeleteTodo = (index) => {
        let newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    const onEditTodoItem = (index) => {
        setEditIndex(index);
    }

    return (
        <div>
            Todo Component:
            <AddTodoComponent onSubmitTodo={onSubmitTodo} editIndex={editIndex} editTodo={editIndex !== -1 ? todoList[editIndex] : {}}/>
            <SearchTodoComponent searchText={searchText} onSearchTextChange={onSearchTextChange}/>
            <TodoListComponent searchText={searchText} todoList={todoList} deleteTodoItem={onDeleteTodo} editTodoItem={onEditTodoItem}/>
        </div>
    )
}
