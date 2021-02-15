import { createReducer } from '@reduxjs/toolkit'
import { addTodo } from './actions/addTodo'
import { ApplicationState } from './entities/ApplicationState'

export const initialState: ApplicationState = {
  todos: []
}

export const applicationReducer = createReducer(initialState, (builder) =>
  builder.addCase(addTodo, (state, { payload }) => {
    state.todos.push(payload)
  })
)
