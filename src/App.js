import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
import DeleteBlock from "./components/DeleteBlock/DeleteBlock";

let savedTodos = JSON.parse(localStorage.getItem("todo")) ?? [];

function App() {
  const [todo, setTodo] = useState(savedTodos || []);
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTask() {
    if (value.length) {
      let newArr = [
        ...todo,
        {
          id: new Date().toISOString(),
          text: value,
        },
      ];
      setTodo(newArr);
      setValue("");
    }
  }

  const deleteTask = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  const deleteAll = () => {
    setTodo([]);
  };

  return (
    <Wrapper>
      <Form
        addTask={addTask}
        setValue={setValue}
        value={value}
        deleteTask={deleteTask}
        todo={todo}
      />
      <DeleteBlock deleteAll={deleteAll} />
    </Wrapper>
  );
}

export default App;
