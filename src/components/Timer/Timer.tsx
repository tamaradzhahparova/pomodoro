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
      <div className={styles.minutes}>25:00</div>
      <button className={styles.buttonAdd}>+</button>
    </div>
  </div>)
}

export default Timer;
