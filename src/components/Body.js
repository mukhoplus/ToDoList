import React from "react";
import { Image } from "react-bootstrap";

const Body = ({ todos, deleteTodo, updateTodoCheck }) => {
  // map() 함수를 사용하여 10개의 row를 생성 후 출력하기 위함
  const outputTodos = [...todos];

  // 출력용 배열에 더미 데이터 추가
  while (outputTodos.length < 10) {
    outputTodos.push({ title: "", content: "", date: "", isDone: false });
  }

  // 데이터 체크
  const checkData = (todo) => {
    return todo.title && todo.content && todo.date;
  };

  // 체크 박스 핸들링
  const checkboxHandler = (idx) => {
    updateTodoCheck(idx);
  };

  // 렌더링 핸들링
  const renderHandler = (todo, idx) => {
    if (!todo.isDone) {
      return (
        <>
          <td>{idx + 1}</td>
          <td>{todo.title}</td>
          <td>{todo.content}</td>
          <td>{todo.date}</td>
        </>
      );
    }

    return (
      <>
        <td>
          <del>{idx + 1}</del>
        </td>
        <td>
          <del>{todo.title}</del>
        </td>
        <td>
          <del>{todo.content}</del>
        </td>
        <td>
          <del>{todo.date}</del>
        </td>
      </>
    );
  };

  return (
    <table className="table table-striped w-100">
      <thead>
        <tr>
          <th className="col-1"></th>
          <th className="col-1">No</th>
          <th className="col-2">Title</th>
          <th className="col-4">Content</th>
          <th className="col-3">Date of register</th>
          <th className="col-1">Delete</th>
        </tr>
      </thead>
      <tbody>
        {outputTodos.map((todo, idx) => (
          <tr key={idx + 1}>
            {checkData(todo) ? (
              <td>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={todo.isDone}
                    onChange={() => checkboxHandler(idx)}
                  />
                </div>
              </td>
            ) : (
              <td />
            )}
            {renderHandler(todo, idx)}
            {checkData(todo) ? (
              <td>
                <Image
                  src="/assets/delete-row.svg"
                  alt="Detele row"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  onClick={() => deleteTodo(idx)}
                />
              </td>
            ) : (
              <td />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Body;
