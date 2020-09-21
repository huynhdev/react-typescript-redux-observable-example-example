import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'
import { fetchArticlesEpic } from './articles/epics'
import { fetchArticleDetailEpic } from './articleDetail/epics'
import articlesReducer from './articles/reducer'
import articleDetailReducer from './articleDetail/reducer'
import { ArticlesState } from './articles/types'
import { ArticleDetailState } from './articleDetail/types'

export interface ApplicationState {
  layout: LayoutState
  router: RouterState
  articles: ArticlesState
  articleDetail: ArticleDetailState
}

export const rootEpic = combineEpics(fetchArticlesEpic, fetchArticleDetailEpic)

export const rootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    articles: articlesReducer,
    articleDetail: articleDetailReducer,
    router: connectRouter(history)
  })
