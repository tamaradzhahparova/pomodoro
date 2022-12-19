import s from './Dropdown.module.css'
import {Plus} from "../../icons/Plus";
import {Minus} from "../../icons/Minus";
import {Edit} from "../../icons/Edit";
import {Delete} from "../../icons/Delete";
import {useAppDispatch} from "../../../redux/store";
import {decreasePomodoroCount, increasePomodoroCount} from "../../../redux/slices/todos";
import {FC} from "react";

interface DropdownProps {
  taskId: number
  setShowInput: (value: boolean) => void
  setIsModalOpen: (value: boolean) => void
}

export const Dropdown: FC<DropdownProps> = ({taskId, setShowInput, setIsModalOpen}) => {
  const dispatch = useAppDispatch()


  return <ul className={s.dropdown}>
    <li className={s.dropdownItem} onClick={() => dispatch(increasePomodoroCount(taskId))}>
        <Plus/>
        <span>Увеличить</span>
    </li>
    <li className={s.dropdownItem} onClick={() => dispatch(decreasePomodoroCount(taskId))}>
        <Minus/>
        <span>Уменьшить</span>
    </li>
    <li className={s.dropdownItem} onClick={() => setShowInput(true)} >
        <Edit/>
        <span>Редактировать</span>
    </li>
    <li className={s.dropdownItem} onClick={() => setIsModalOpen(true)}>
      <Delete/>
      <span>Удалить</span>
    </li>
  </ul>
}