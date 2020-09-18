import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'

export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    router: connectRouter(history)
  })

export interface ApplicationState {
  layout: LayoutState
  router: RouterState
}

export const rootEpic = combineEpics()

export const rootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    router: connectRouter(history)
  })
