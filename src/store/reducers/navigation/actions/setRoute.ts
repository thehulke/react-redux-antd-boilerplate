import { createAction } from '@reduxjs/toolkit'
import { NavigationActions } from './NavigationActions'

export const setRoute = createAction<string, NavigationActions.SET_ROUTE>(NavigationActions.SET_ROUTE)
