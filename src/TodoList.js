import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => {
    return  todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
    //map関数を一つづつ取り出す
};

export default TodoList;
