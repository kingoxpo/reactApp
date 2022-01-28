import { useState } from "react/cjs/react.development";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = event => setTodo(event.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos(currentArr => {
      const newArr = [todo, ...currentArr];
      console.log(newArr);
      console.log(newArr.map((item, index) => <li key={index}>{item}</li>));
      return newArr;
    });
    setTodo("");
  };

  const deleteBtn = index => {
    // const li = event.target.parentElement;
    setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
    console.log(index);
    // li.remove();
  };

  return (
    <div>
      <h1>총 메모 개수는 {todos.length}개 입니다.</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="wirte todo"
        ></input>
        <button>Save</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
