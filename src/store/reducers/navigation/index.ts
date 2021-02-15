import { createReducer } from '@reduxjs/toolkit'
import { setRoute } from './actions/setRoute'
import { NavigationState } from './entities/NavigationState'

export const initialState: NavigationState = {
  route: {
    current: '/'
  },
  auth: {}
}
export const navigationReducer = createReducer(initialState, (builder) =>
  builder.addCase(setRoute, (state, { payload }) => {
    state.route.current = payload
  })
)
