import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Todo {
  id: number
  name: string
  countOfPomodoro: number
}

interface TodosSlice {
  todos: Todo[]
  duration: number
}

const initialState: TodosSlice = {
  todos: [
    {id: 0, name: 'задача тест', countOfPomodoro: 1}
  ],
  duration: 25
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    }
  }
})

export const { addTodo } = todos.actions

export default todos.reducer