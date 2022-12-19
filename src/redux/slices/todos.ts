import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Todo {
  id: number
  name: string
  countOfPomodoro: number
  active: boolean
}

interface TodosSlice {
  todos: Todo[]
  duration: number
}

const initialState: TodosSlice = {
  todos: [
    {id: 0, name: 'задача тест', countOfPomodoro: 1, active: true}
  ],
  duration: 25
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    increasePomodoroCount: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) return {...todo, countOfPomodoro: ++todo.countOfPomodoro }
        return todo
      })
    }
  }
})

export const { addTodo, deleteTodo, increasePomodoroCount } = todos.actions

export default todos.reducer