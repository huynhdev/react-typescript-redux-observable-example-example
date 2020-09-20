import { combineReducers } from 'redux'

import { ActionType } from 'typesafe-actions'
import * as articles from './actions'
import { ArticlesState, ArticlesActionTypes } from './types'

const PER = 10

export type ArticlesAction = ActionType<typeof articles>

export const initialState: ArticlesState = {
  payload: {},
  errors: null,
  loading: false,
  dataByIds: {},
  isNext: false
}

const payload = (state = initialState.payload, action: ArticlesAction) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const errors = (state = initialState.errors, action: ArticlesAction) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ERROR: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const loading = (state = initialState.loading, action: ArticlesAction) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_REQUEST: {
      return true
    }
    case ArticlesActionTypes.FETCH_SUCCESS:
    case ArticlesActionTypes.FETCH_ERROR: {
      return false
    }
    default: {
      return state
    }
  }
}

const dataByIds = (state = initialState.dataByIds, action: ArticlesAction) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_SUCCESS: {
      const listArticles = action.payload.data
      return listArticles?.reduce((newState, article) => ({ ...newState, [article.id]: article }), { ...state })
    }
    default: {
      return state
    }
  }
}

const isNext = (state = initialState.isNext, action: ArticlesAction) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_SUCCESS: {
      const listArticles = action.payload.data
      return listArticles?.length === PER
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  payload,
  errors,
  loading,
  dataByIds,
  isNext
})
