import { action } from 'typesafe-actions'
import { TagDetailActionTypes, TagDetail } from './types'

export const fetchRequest = (id: string) => action(TagDetailActionTypes.FETCH_REQUEST, id)

export const fetchSuccess = (data: TagDetail) => action(TagDetailActionTypes.FETCH_SUCCESS, data)

export const fetchError = (error: any) => action(TagDetailActionTypes.FETCH_ERROR, error)
