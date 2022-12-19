import React, {FC, useState} from 'react';
import s from './TodoItem.module.css'
import {DropdownIcon} from "../../icons/DropdownIcon";
import {Dropdown} from "../Dropdown/Dropdown";
import {onEnterDown} from "../../../shared/helpers/onEnterDown";
import {useAppDispatch} from "../../../redux/store";
import {changeTaskName} from "../../../redux/slices/todos";
import {Close} from "../../icons/Close";
import {deleteTodo} from "../../../redux/slices/todos";

interface TodoItemProps {
  name: string
  countOfPomodoro: number,
  id: number
  isActive: boolean
}

export const TodoItem: FC<TodoItemProps> = ({name, countOfPomodoro, id}) => {
  const [showInput, setShowInput] = useState(false)
  const [taskName, setTaskName] = useState(name)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const dispatch = useAppDispatch()
  
  const changeTaskNameCallback = () => {
    dispatch(changeTaskName({name: taskName, id: id}))
    setShowInput(false)
  }
  
  const deleteTodoCallback = () => {
    dispatch(deleteTodo(id))
    setIsModalOpen(false)
  }
  
  
  return (<li className={s.todoItem}>
    <div className={s.left}>
      <div className={s.pomodoroCount}>{countOfPomodoro}</div>
      {showInput ?
        <input className={s.editTaskInput} value={taskName} onChange={e => setTaskName(e.target.value)}
               onKeyDown={e => onEnterDown(e.code, changeTaskNameCallback)} autoFocus/> :
        <div className={s.name}>{name}</div>}
    </div>
    {!showInput && !isModalOpen  && <button className={s.dropdownButton}>
        <DropdownIcon/>
        <div className={s.dropdownWrapper}>
            <Dropdown taskId={id} setShowInput={setShowInput} setIsModalOpen={setIsModalOpen}/>
        </div>
    </button>}
  
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

