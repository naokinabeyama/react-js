import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoList = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return alert("文字を入力して下さい");
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  }


  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoList} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />

      {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>登録できるtodoは5個まで!</p>}

      <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />

      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
