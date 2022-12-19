import s from './Dropdown.module.css'
import {Plus} from "../../icons/Plus";
import {Minus} from "../../icons/Minus";
import {Edit} from "../../icons/Edit";
import {Delete} from "../../icons/Delete";
import {useAppDispatch} from "../../../redux/store";
import {increasePomodoroCount} from "../../../redux/slices/todos";
import {FC} from "react";

interface DropdownProps {
  taskId: number
  setIsModalOpen: (value: boolean) => void
}

export const Dropdown: FC<DropdownProps> = ({taskId, setIsModalOpen}) => {
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
    <li className={s.dropdownItem} onClick={() => setIsModalOpen(true)}>
      <Delete/>
      <span>Удалить</span>
    </li>
  </ul>
}