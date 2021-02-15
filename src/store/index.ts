import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { applicationReducer } from './reducers/application'
import { navigationReducer } from './reducers/navigation'

const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true
})

const rootReducer = combineReducers({
  application: applicationReducer,
  navigation: navigationReducer
})

export const defineStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      process.env.REACT_APP_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  })

export const store = defineStore()
