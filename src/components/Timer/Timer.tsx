import React, {FC, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../redux/store'
import useSound from 'use-sound'
import cn from 'classnames'

import sound from '../../sounds/dzyn.mp3'

import styles from './Timer.module.css'
import {addPomodoroComplete} from '../../redux/slices/todos'

interface TimerProps {
}

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
    <div className={cn(styles.Timer, {
      [styles.working]: isTimerWorking
    })}>
      {activeTodo ? (
        <>
          <header className={styles.header}>
            <span className={styles.todo}>{activeTodo?.name}</span>
            <span
              className={styles.pomodoroCount}
            >{`Сегодня ${activeTodo.completePomodoro}/${activeTodo.countOfPomodoro}`}</span>
          </header>
          <div className={styles.main}>
            <div className={styles.minutes}>
              <CountDown
                minutes={duration}
                isTimerWorking={isTimerWorking}
                activeTodoId={activeTodo?.id}
              />
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
              <button className={styles.start} onClick={isTimerWorking ? handlePause : handleStart}>
                {isTimerWorking ? 'Пауза' : 'Старт'}
              </button>
              <button className={styles.pause} onClick={handlePause}>
                Стоп
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.withoutTodo}>
          Пожалуйста, выберите задачу
        </div>
      )}
    </div>
  )
}

export default Timer

interface CountDownProps {
  minutes: number
  seconds?: number
  isTimerWorking: boolean
  activeTodoId?: number
}

const CountDown: FC<CountDownProps> = ({
                                         minutes = 0,
                                         seconds = 0,
                                         isTimerWorking,
                                         activeTodoId,
                                       }) => {
  const [over, setOver] = React.useState(false)
  const [[m, s], setTime] = React.useState([minutes, seconds])
  const [play] = useSound(sound)

  const dispatch = useAppDispatch()

  const tick = () => {
    if (!isTimerWorking || over) return

    if (m === 0 && s === 0) {
      setOver(true)
      play()
      if (activeTodoId) {
        console.log('complete')
        dispatch(addPomodoroComplete(activeTodoId))
      }
    } else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1])
    }
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <div>
      <div className={styles.numbers}>{`${m.toString().padStart(2, '0')}:${s
        .toString()
        .padStart(2, '0')}`}</div>
    </div>
  )
}
