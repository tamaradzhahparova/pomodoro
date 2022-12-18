import React, {FC} from 'react';
import s from './TodoItem.module.css'
import {DropdownIcon} from "../../icons/DropdownIcon";
import {Dropdown} from "../Dropdown/Dropdown";

interface TodoItemProps {
  name: string
  countOfPomodoro: number,
  id: number
}

export const TodoItem: FC<TodoItemProps> = ({name, countOfPomodoro, id}) => {
  return (<li className={s.todoItem}>
    <div className={s.left}>
      <div className={s.pomodoroCount}>{countOfPomodoro}</div>
      <div className={s.name}>{name}</div>
    </div>
    <button className={s.dropdownButton}>
      <DropdownIcon />
      <div className={s.dropdownWrapper}>
        <Dropdown taskId={id} />
      </div>

    </button>
  </li>)
}

