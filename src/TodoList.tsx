import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { stableValueHash } from "react-query/types/core/utils";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

const TodoList = () => {
  // Input천지 일때(e.g. 회원가입폼) 유용한 React Hook Form
  // register fn: onChange 핸들러 함수 만들고, props넣기, setState 대체. 문자열을 함께 보내줘서 name을 설정해줘야한다. 띄어쓰기 없이 camelCase나 snake_case
  // watch fn: Form들의 변화를 감시(onChange 찍어줌)
  // handleSubmit fn: 모든 validation을 마친 후 데이터가 유효할 때 handleSubmit(onValid) 함수를 호출한다.
  // formState fn: Error 'type'을 표시해줌으로써 error handling. {value, message} object를 활용하여 메세지를 보낼 수도 있다.
  //defaultValues: Input창을 디폴트값으로 미리 채워놓을 수 있다.
  // setError: 특정한 에러를 발생시켜준다. 추가적인 에러가 필요하다면 항목의 이름을 새 지어주고 사용할 수  있다.

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "Password are not the same!" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server OFFLINE!" });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* html태그 required로 진행해도 되겠지만, 유저가 의도적으로 코드를 지우거나 오래된 브라우저를 사용하는 다양한 경우를 방지하여 JS로 validation이 가능하다. */}
        <input
          {...register("email", {
            required: "Email required!",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only @naver.com emails are allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "First Name required!",
            validate: {
              noDanbom: (value) =>
                value.includes("danbom") ? "No danbom allowed!" : true,
              noHyun: (value) =>
                value.includes("hyun") ? "No hyun allowed!" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Last Name required!" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Username required!",
            minLength: {
              value: 5,
              message: "Your usename is too short!",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "Password required!" })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirm", {
            required: "Password required!",
          })}
          placeholder="Password Confirm"
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <span>{errors?.extraError?.message}</span>
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
