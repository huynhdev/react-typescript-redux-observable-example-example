import { combineReducers } from 'redux'

import { ActionType } from 'typesafe-actions'
import * as articles from './actions'
import { TagDetailState, TagDetailActionTypes } from './types'

export type TagDetailActions = ActionType<typeof articles>

export const initialState: TagDetailState = {
  payload: {},
  errors: null,
  loading: false
}

const payload = (state = initialState.payload, action: TagDetailActions) => {
  switch (action.type) {
    case TagDetailActionTypes.FETCH_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const errors = (state = initialState.errors, action: TagDetailActions) => {
  switch (action.type) {
    case TagDetailActionTypes.FETCH_ERROR: {
      return action.payload.msg
    }
    default: {
      return state
    }
  }
}

const loading = (state = initialState.loading, action: TagDetailActions) => {
  switch (action.type) {
    case TagDetailActionTypes.FETCH_REQUEST: {
      return true
    }
    case TagDetailActionTypes.FETCH_SUCCESS:
    case TagDetailActionTypes.FETCH_ERROR: {
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
