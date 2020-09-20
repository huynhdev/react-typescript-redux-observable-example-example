import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'
import { fetchArticlesEpic } from './articles/epics'
import articlesReducer from './articles/reducer'
import { ArticlesState } from './articles/types'

export interface ApplicationState {
  layout: LayoutState
  router: RouterState
  articles: ArticlesState
}

export const rootEpic = combineEpics(fetchArticlesEpic)

export const rootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    articles: articlesReducer,
    router: connectRouter(history)
  })
