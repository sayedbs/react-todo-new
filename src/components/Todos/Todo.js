import React , { lazy, Suspense, useState }  from "react";
import FormGroup from '../form-group/FormGroup';
import Button from '../button/Button';
import { List } from '../list/List';
import ViewTodo from './view-todo/ViewTodo';


export const Todos = (props) => {
    const [todoTitle, setTodoTitle] = useState(null);
    const [todos, setTodos] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const addTodo = () => {
        if (todoTitle == null || todoTitle == "") {
            alert("Enter todo title then hit the save button!");
            return 0;
        }
        setTodos([...todos, { id: "todo" + Math.random(), title: todoTitle }]);
        setTodoTitle("");
    };

    const deleteItem = (id) => {
        setTodos(todos.filter((item) => item.id != id));
    };

    const viewTodo = (id) => {
        debugger
        setSelectedItem(todos.find((item) => item.id === id));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    };
    return (
        <>
            <FormGroup
                onKeyUp={handleKeyPress}
                name="todoInput"
                placeholder="Enter todo text"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />

            <Button onClick={() => addTodo()}>Add todo</Button>

            <hr />

            <div style={{ overflow: "hidden", paddingLeft: "10px" }}>
                <div style={{ width: "500px", float: "left" }}>
                    <List
                        type="ol"
                        close
                        viewItem
                        selectedItem={selectedItem}
                        deleteItem={(id) => deleteItem(id)}
                        viewTodo={(id) => viewTodo(id)}
                        items={todos}
                    />
                </div>
                <div style={{ width: "500px", float: "left" }}>
                    {selectedItem ? (
                        <button onClick={() => setSelectedItem(null)}>
                            close todo
                        </button>
                    ) : (
                        ""
                    )}
                    {selectedItem ? <ViewTodo todo={selectedItem} /> : ""}
                </div>
            </div>
        </>
    );
};
