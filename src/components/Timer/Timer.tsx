import React, { FC } from 'react';
import styles from './Timer.module.css';

interface TimerProps {}

const Timer: FC<TimerProps> = () => {
  return (<div className={styles.Timer}>
    <header className={styles.header}>
      <span className={styles.todo}>Сверстать сайт</span>
      <span className={styles.pomodoroCount}>Помидор 1</span>
    </header>
    <div className={styles.main}>
      <div className={styles.minutes}>25:00
        <button className={styles.buttonAdd}>+</button>
      </div>
      <div className={styles.currentTodo}>
        <span>Задача 1 - </span>
        <span>Сверстать сайт</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.start}>Старт</button>
        <button className={styles.pause}>Стоп</button>
      </div>

    </div>
  </div>)
}

export default Timer;
