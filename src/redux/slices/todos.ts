import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: number
  name: string
  countOfPomodoro: number
  active: boolean
  completePomodoro: number
}

interface TodosSlice {
  todos: Todo[]
  duration: number
}

const initialState: TodosSlice = {
  todos: [
    {
      id: 1,
      name: 'задача тест',
      countOfPomodoro: 1,
      active: true,
      completePomodoro: 0,
    },
  ],
  duration: 25,
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      )
    },
    increasePomodoroCount: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload)
          return { ...todo, countOfPomodoro: ++todo.countOfPomodoro }
        return todo
      })
    },
    decreasePomodoroCount: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload)
          return {
            ...todo,
            countOfPomodoro:
              todo.countOfPomodoro > 1 ? --todo.countOfPomodoro : 1,
          }
        return todo
      })
    },
    changeTodoName: (
      state,
      action: PayloadAction<{ name: string; id: number }>
    ) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id)
          return { ...todo, name: action.payload.name }
        return todo
      })
    },
    setActiveTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload)
          return { ...todo, active: true }
        return { ...todo, active: false }
      })
    },
    addPomodoroComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload)
          return {
            ...todo,
            completePomodoro: ++todo.completePomodoro,
          }
        return todo
      })
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  increasePomodoroCount,
  decreasePomodoroCount,
  changeTodoName,
  setActiveTodo,
  addPomodoroComplete,
} = todos.actions

export default todos.reducer
