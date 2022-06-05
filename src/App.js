import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
  
  const [todos, setTodos] = useState([ 
    //{id: 1, name: "Todo1", completed: false }, 
]);

const todoNameRef =useRef();

const handleAddTodo = () => {
  //タスクを追加する
  const name= todoNameRef.current.value;
  setTodos((prevTodos) => {
    return [...prevTodos, {id: uuidv4(), name: name, completed:false}];
  });

};

////////////////////////////////Error 反映されてません
//フックス：変数を監視してそれが変更された場合のみ再レンダリング

const toggleTodo = (id) => {
  const newTodos =[...todos];
  const todo =newTodos.find((todo)=> todo.id === id);
  todo.completed = !todo.completed;
  setTodos(newTodos);
};

const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
}

  return (
  <>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input type= "text" ref={todoNameRef} />
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button onClick={handleClear}>完了したタスクの削除</button>
        <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </>
  );
}

export default App;
