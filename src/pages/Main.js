import Header from "../components/Header";
import Body from "../components/Body";

const Main = ({
  todos,
  getTodosLength,
  addTodo,
  clearTodo,
  deleteTodo,
  updateTodoCheck,
}) => {
  return (
    <>
      <Header
        getTodosLength={getTodosLength}
        addTodo={addTodo}
        clearTodo={clearTodo}
      />
      <Body
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodoCheck={updateTodoCheck}
      />
    </>
  );
};

export default Main;
