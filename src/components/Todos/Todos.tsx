import React, {FC, useState} from 'react';
import styles from './Todos.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {addTodo} from "../../redux/slices/todos";
import {TodoItems} from "./TodoItems/TodoItems";
import {onEnterDown} from "../../shared/helpers/onEnterDown";

interface TodosProps {
}

const Todos: FC<TodosProps> = () => {

  const dispatch = useAppDispatch()
  const [newTask, setNewTask] = useState('')
  const todos = useAppSelector(state => state.todos.todos)

  const addNewTask = () => {
    dispatch(addTodo({id: todos.length, name: newTask, countOfPomodoro: 1, active: !todos.length}))
    setNewTask('')
  }
  

  return (<div className={styles.Todos}>
    <input value={newTask} className={styles.input} type='text' placeholder='Название задачи'
           onChange={(e) => setNewTask(e.target.value)} onKeyDown={e => onEnterDown(e.code, addNewTask)}/>
    <button className={styles.button} onClick={addNewTask}>Добавить</button>
    {!!todos.length && <TodoItems todos={todos}/>}
  </div>)
}

export default Todos;
