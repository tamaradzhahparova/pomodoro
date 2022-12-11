import React, {FC} from 'react';
import {TodoItem} from "../TodoItem/TodoItem";
import {Todo} from "../../../redux/slices/todos";
import s from './TodoItems.module.css'

interface TodoItemsProps {
  todos: Todo[]
}

export const TodoItems: FC<TodoItemsProps> = ({todos}) => {
  const commonPomodoroCount = todos.reduce(( sum, current) => sum + current.countOfPomodoro, 0 )
  console.log(commonPomodoroCount)
  
  return (<>
    <ul className={s.todosWrapper}>
      {todos.map(item => <TodoItem key={item.id} name={item.name} countOfPomodoro={item.countOfPomodoro}/>)}
    </ul>
    <span className={s.commonPomodoroCount}></span>
  </>)
}

