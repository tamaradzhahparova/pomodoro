import React, {FC} from 'react';
import s from './TodoItem.module.css'
import {DropdownIcon} from "../../icons/DropdownIcon";

interface TodoItemProps {
  name: string
  countOfPomodoro: number
}

export const TodoItem: FC<TodoItemProps> = ({name, countOfPomodoro}) => {
  return (<li className={s.todoItem}>
    <div className={s.left}>
      <div className={s.pomodoroCount}>{countOfPomodoro}</div>
      <div className={s.name}>{name}</div>
    </div>
    <button className={s.dropdown}>
      <DropdownIcon />
    </button>
  </li>)
}

