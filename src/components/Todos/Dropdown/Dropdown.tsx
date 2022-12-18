import s from './Dropdown.module.css'
import {Plus} from "../../icons/Plus";
import {Minus} from "../../icons/Minus";
import {Edit} from "../../icons/Edit";
import {Delete} from "../../icons/Delete";
import {useAppDispatch} from "../../../redux/store";
import {deleteTodo, increasePomodoroCount} from "../../../redux/slices/todos";
import {FC} from "react";

interface DropdownProps {
  taskId: number
}

export const Dropdown: FC<DropdownProps> = ({taskId}) => {
  const dispatch = useAppDispatch()


  return <ul className={s.dropdown}>
    <li className={s.dropdownItem} onClick={() => dispatch(increasePomodoroCount(taskId))}>
        <Plus/>
        <span>Увеличить</span>
    </li>
    <li className={s.dropdownItem}>
        <Minus/>
        <span>Уменьшить</span>
    </li>
    <li className={s.dropdownItem}>
        <Edit/>
        <span>Редактировать</span>
    </li>
    <li className={s.dropdownItem} onClick={() => dispatch(deleteTodo(taskId))}>
        <Delete/>
        <span>Удалить</span>
    </li>
  </ul>
}