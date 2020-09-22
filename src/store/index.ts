import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'
import { fetchArticlesEpic } from './articles/epics'
import { fetchArticleDetailEpic } from './articleDetail/epics'
import { fetchTagDetailEpic } from './tagDetail/epics'
import articlesReducer from './articles/reducer'
import articleDetailReducer from './articleDetail/reducer'
import tagDetailReducer from './tagDetail/reducer'
import { ArticlesState } from './articles/types'
import { ArticleDetailState } from './articleDetail/types'
import { TagDetailState } from './tagDetail/types'

export interface ApplicationState {
  layout: LayoutState
  router: RouterState
  articles: ArticlesState
  articleDetail: ArticleDetailState
  tagDetail: TagDetailState
}

export const rootEpic = combineEpics(fetchArticlesEpic, fetchArticleDetailEpic, fetchTagDetailEpic)

export const rootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    articles: articlesReducer,
    articleDetail: articleDetailReducer,
    tagDetail: tagDetailReducer,
    router: connectRouter(history)
  })
