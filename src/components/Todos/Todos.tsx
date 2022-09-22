import React, { FC } from 'react';
import styles from './Todos.module.css';

interface TodosProps {}

const Todos: FC<TodosProps> = () => {
  return (<div className={styles.Todos}>
    <input className={styles.input} type='text' placeholder='Название задачи'/>
    <button className={styles.button}>Добавить</button>
  </div>)
}

export default Todos;
