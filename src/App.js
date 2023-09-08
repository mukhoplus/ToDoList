import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";

function App() {
  const getStorageTodos = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  // localStorage에 to-do list를 저장하여 새로고침의 영향을 받지 않도록 함
  const [todos, setTodos] = useState(getStorageTodos());

  // 로컬 To-Do List가 변화할 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 세션을 공유하는 서로 다른 페이지에서 데이터를 갱신하는 경우
  window.addEventListener("storage", (e) => {
    if (e.key === "todos") {
      const storedTodos = getStorageTodos();
      setTodos(storedTodos);
    }
  });

  const getTodosLength = () => {
    return todos.length;
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const clearTodo = () => {
    setTodos([]);
  };

  const deleteTodo = (deleteIdx) => {
    const newTodos = todos.filter((_, idx) => idx !== deleteIdx);
    setTodos([...newTodos]);
  };

  const updateTodoCheck = (updateIdx) => {
    const newTodos = todos.map((it, idx) =>
      idx === updateIdx ? { ...it, isDone: !it.isDone } : it
    );
    setTodos([...newTodos]);
  };

  return (
    <div className="App">
      <Main
        todos={todos}
        getTodosLength={getTodosLength}
        addTodo={addTodo}
        clearTodo={clearTodo}
        deleteTodo={deleteTodo}
        updateTodoCheck={updateTodoCheck}
      />
    </div>
  );
}

export default App;
