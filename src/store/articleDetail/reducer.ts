import { combineReducers } from 'redux'

import { ActionType } from 'typesafe-actions'
import * as articles from './actions'
import { ArticleDetailState, ArticleDetailActionTypes } from './types'

export type ArticleDetailActions = ActionType<typeof articles>

export const initialState: ArticleDetailState = {
  payload: {},
  errors: null,
  loading: false
}

const payload = (state = initialState.payload, action: ArticleDetailActions) => {
  switch (action.type) {
    case ArticleDetailActionTypes.FETCH_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const errors = (state = initialState.errors, action: ArticleDetailActions) => {
  switch (action.type) {
    case ArticleDetailActionTypes.FETCH_ERROR: {
      return action.payload.msg
    }
    default: {
      return state
    }
  }
}

const loading = (state = initialState.loading, action: ArticleDetailActions) => {
  switch (action.type) {
    case ArticleDetailActionTypes.FETCH_REQUEST: {
      return true
    }
    case ArticleDetailActionTypes.FETCH_SUCCESS:
    case ArticleDetailActionTypes.FETCH_ERROR: {
      return false
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  payload,
  errors,
  loading
})
