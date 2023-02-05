import React, {FC, useEffect, useState} from 'react';
import styles from './Timer.module.css';
import {useAppSelector} from "../../redux/store";
import {getPadTime} from "../../shared/helpers/getPadTime";

interface TimerProps {
}

const Timer: FC<TimerProps> = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const activeTodo = todos.find(todo => todo.active === true)
  const duration = useAppSelector(state => state.todos.duration)

  const [timeLeft, setTimeLeft] = useState(duration * 60)

  const minutes = getPadTime(Math.floor(timeLeft / 60))
  const seconds = getPadTime(timeLeft - +minutes * 60)

  const handleStart = () => {}
  const handlePause = () => {}

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

  }, [])


  return (<div className={styles.Timer}>
    <header className={styles.header}>
      <span className={styles.todo}>{activeTodo?.name}</span>
      <span className={styles.pomodoroCount}>Помидор 1</span>
    </header>
    <div className={styles.main}>
      <div className={styles.minutes}>{`${minutes}:${seconds}`}
      {/*<div className={styles.minutes}>{timeLeft}*/}
        <button className={styles.buttonAdd}>+</button>
      </div>
      <div className={styles.currentTodo}>
        {activeTodo ? <>
          <span>Задача - </span>
          <span>{activeTodo.name}</span>
        </> : <span>Для запуска таймера выберите задачу</span>}
      </div>
      <div className={styles.buttons}>
        <button className={styles.start} onClick={handleStart}>Старт</button>
        <button className={styles.pause} onClick={handlePause}>Стоп</button>
      </div>

    </div>
  </div>)
}

export default Timer;
