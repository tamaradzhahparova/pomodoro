import React, {FC} from 'react';
import {TodoItem} from "../TodoItem/TodoItem";
import {Todo} from "../../../redux/slices/todos";
import s from './TodoItems.module.css'
import {pomodorToMinutes} from "../../../shared/helpers/pomodorToMinutes";
import {useAppSelector} from "../../../redux/store";

interface TodoItemsProps {
  todos: Todo[]
}

export const TodoItems: FC<TodoItemsProps> = ({todos}) => {
  const commonPomodoroCount = todos.reduce((sum, current) => sum + current.countOfPomodoro, 0)
  const duration = useAppSelector(state => state.todos.duration)

  return (<>
    <ul className={s.todosWrapper}>
      {todos.map(item => <TodoItem key={item.id} name={item.name} countOfPomodoro={item.countOfPomodoro} id={item.id}
                                   isActive={item.active}/>)}
    </ul>
    <span className={s.commonPomodoroCount}>{pomodorToMinutes(commonPomodoroCount, duration)}</span>
  </>)
}

