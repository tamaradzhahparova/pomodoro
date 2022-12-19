import React, {FC, useState} from 'react';
import styles from './Todos.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {addTodo} from "../../redux/slices/todos";
import {TodoItems} from "./TodoItems/TodoItems";

interface TodosProps {
}

const Todos: FC<TodosProps> = () => {

  const dispatch = useAppDispatch()
  const [newTask, setNewTask] = useState('')
  const todos = useAppSelector(state => state.todos.todos)

  const addNewTask = () => {
    dispatch(addTodo({id: todos.length, name: newTask, countOfPomodoro: 1, active: false}))
    setNewTask('')
  }

  const onKeyDown = (key: string) => {
    if (key === 'Enter') addNewTask()
  }

  return (<div className={styles.Todos}>
    <input value={newTask} className={styles.input} type='text' placeholder='Название задачи'
           onChange={(e) => setNewTask(e.target.value)} onKeyDown={e => onKeyDown(e.code)}/>
    <button className={styles.button} onClick={addNewTask}>Добавить</button>
    {!!todos.length && <TodoItems todos={todos}/>}
  </div>)
}

export default Todos;
