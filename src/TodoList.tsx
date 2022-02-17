import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  // input천지 일때(e.g. 회원가입폼) 유용한 React Hook Form
  // register fn: onChange 핸들러 함수 만들고, props넣기, setState 대체. 문자열을 함께 보내줘서 name을 설정해줘야한다. 띄어쓰기 없이 camelCase나 snake_case
  // watch fn: form들의 변화를 감시(onChange 찍어줌)
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input
          {...register("passwordConfirm")}
          placeholder="Password Confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

/* const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("Todo should be longer!");
    }
    console.log("submitted!");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}; */

export default TodoList;
