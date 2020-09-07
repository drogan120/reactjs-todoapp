import React, { useState } from "react";
import "./App.css";

// import Compinent
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h4>DevEd Todo List</h4>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
