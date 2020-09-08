import React, { useState } from "react";
import "./App.css";

// import Compinent
import Form from "./components/Form";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h4>DevEd Todo List</h4>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
