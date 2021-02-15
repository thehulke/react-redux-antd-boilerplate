import { createAction } from '@reduxjs/toolkit'
import { ApplicationActions } from './ApplicationActions'

export const addTodo = createAction<{}>(ApplicationActions.ADD_TODO)
