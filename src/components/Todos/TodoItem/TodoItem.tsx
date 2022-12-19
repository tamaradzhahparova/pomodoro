import React, {FC, useState} from 'react';
import s from './TodoItem.module.css'
import {DropdownIcon} from "../../icons/DropdownIcon";
import {Dropdown} from "../Dropdown/Dropdown";
import {Close} from "../../icons/Close";
import {useAppDispatch} from "../../../redux/store";
import {deleteTodo} from "../../../redux/slices/todos";

interface TodoItemProps {
  name: string
  countOfPomodoro: number,
  id: number
}

export const TodoItem: FC<TodoItemProps> = ({name, countOfPomodoro, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()

  const deleteTodoCallback = () => {
    dispatch(deleteTodo(id))
    setIsModalOpen(false)
  }

  return (
    <li className={s.todoItem}>
      <div className={s.left}>
        <div className={s.pomodoroCount}>{countOfPomodoro}</div>
        <div className={s.name}>{name}</div>
      </div>
      <button className={s.dropdownButton}>
        <DropdownIcon/>
        {!isModalOpen && <div className={s.dropdownWrapper}>
          <Dropdown taskId={id} setIsModalOpen={setIsModalOpen}/>
        </div>}
      </button>
      {isModalOpen && <div className={s.modal}>
        <div className={s.modalContent}>
          <div className={s.modalText}>Удалить задачу?</div>
          <button className={s.deleteButton} onClick={deleteTodoCallback}>Удалить</button>
          <button className={s.cancelButton} onClick={() => setIsModalOpen(false)}>Отмена</button>
          <button className={s.closeButton} onClick={() => setIsModalOpen(false)}>
            <Close/>
          </button>
        </div>
      </div>}
    </li>)
}

