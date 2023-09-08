import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import CustomAlert from "./CustomAlert";

const Header = ({ getTodosLength, addTodo, clearTodo }) => {
  const [message, setMessage] = useState(null);

  const titleRef = useRef();
  const contentRef = useRef();

  const checkValidation = (title, content) => {
    if (!title || !content) return false;
    return true;
  };

  const getNowDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const getNewTodo = (title, content) => {
    const newTodo = {
      title: title,
      content: content,
      date: getNowDateTime(),
      isDone: false,
    };

    return newTodo;
  };

  const addHandler = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (!checkValidation(title, content)) {
      setMessage("Error: check input datas");
      return false;
    }

    if (getTodosLength() === 10) {
      setMessage("Error: table is full");
      return false;
    }

    const newTodo = getNewTodo(title, content);

    addTodo(newTodo);

    // 로컬 값 초기화
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const closeAlertHandler = () => {
    setMessage(null);
  };

  return (
    <header>
      {/* Title Text */}
      <h2>My To Do List</h2>
      <p>add your to-do List</p>

      {/* Content Textarea */}
      <form className="contents">
        <div className="row">
          <div className="pad col-md-2">
            <span>Title</span>
          </div>
          <div className="col-md-10">
            <input
              ref={titleRef}
              className="w-100"
              type="text"
              placeholder="Leave a title here"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <span>Content</span>
          </div>
          <div className="col-md-10">
            <textarea
              ref={contentRef}
              className="w-100"
              placeholder="Leave a content here"
            />
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-between">
        {/* Plus To-Do Button */}
        <Button variant="primary" type="submit" onClick={addHandler}>
          Plus To-Do
        </Button>
        {/* Clear Button */}
        <Button className="ml-auto" variant="danger" onClick={clearTodo}>
          Clear
        </Button>
      </div>

      {/* Warning Message */}
      {message && <CustomAlert message={message} onClose={closeAlertHandler} />}
    </header>
  );
};

export default Header;
