import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

interface Iform {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const handleValid = ({ toDo }: Iform) => {
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please write a todo :)" })}
        placeholder="Write a To-Do!"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
