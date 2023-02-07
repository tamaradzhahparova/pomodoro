import React, { FC, useState } from 'react'
import styles from './Timer.module.css'
import { useAppSelector } from '../../redux/store'

interface TimerProps {}

const Timer: FC<TimerProps> = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const activeTodo = todos.find(todo => todo.active === true)
  const duration = useAppSelector(state => state.todos.duration)

  const [isTimerWorking, setIsTimerWorking] = useState<boolean>(false)

  const handleStart = () => {
    setIsTimerWorking(true)
  }
  const handlePause = () => {
    setIsTimerWorking(false)
  }

  return (
    <div className={styles.Timer}>
      <header className={styles.header}>
        <span className={styles.todo}>{activeTodo?.name}</span>
        <span className={styles.pomodoroCount}>Помидор 1</span>
      </header>
      <div className={styles.main}>
        <div className={styles.minutes}>
          <CountDown
            minutes={duration}
            isTimerWorking={isTimerWorking}
          />
          <button className={styles.buttonAdd}>+</button>
        </div>
        <div className={styles.currentTodo}>
          {activeTodo ? (
            <>
              <span>Задача - </span>
              <span>{activeTodo.name}</span>
            </>
          ) : (
            <span>Для запуска таймера выберите задачу</span>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.start} onClick={handleStart}>
            Старт
          </button>
          <button className={styles.pause} onClick={handlePause}>
            Стоп
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer

interface CountDownProps {
  minutes: number
  seconds: number
  isTimerWorking: boolean
}

const CountDown: FC<CountDownProps> = ({
  minutes = 0,
  seconds = 0,
}) => {
  const [paused, setPaused] = React.useState(true)
  const [over, setOver] = React.useState(false)
  const [[m, s], setTime] = React.useState([minutes, seconds])

  const tick = () => {
    if (paused || over) return

    if (m === 0 && s === 0) {
      setOver(true)
    } else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1])
    }
  }

  const reset = () => {
    setTime([parseInt(minutes), parseInt(seconds)])
    setPaused(false)
    setOver(false)
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <div>
      <div>{`${m.toString().padStart(2, '0')}:${s
        .toString()
        .padStart(2, '0')}`}</div>
      <div>{over ? "Time's up!" : ''}</div>
    </div>
  )
}
