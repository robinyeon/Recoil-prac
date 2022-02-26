import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

// **제 위치에 있는 요소를 새로운 요소(값)로 대체하는 방법**
// (1) 타겟의 인덱스를 파악한다(어디있는지)
// (2) 타겟이 오기 직전의 앞부분(front)과 뒷부분(back)으로 나눈다.
// (3) final = [...front, "새로운요소", ...back]
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const target = 1;
// food.slice(0, target); // ["pizza"]
// food.slice(target + 1); //["kimchi", "kimbab"]
// [...food.slice(0, target), "감", ...food.slice(target + 1)];

const ToDo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
