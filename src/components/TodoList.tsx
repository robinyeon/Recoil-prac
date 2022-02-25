import { useForm } from "react-hook-form";

interface Iform {
  toDo: string;
}

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onValid = (data: Iform) => {
    console.log("Add To-Do,", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "Please write a todo :)" })}
          placeholder="Write a To-Do!"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
