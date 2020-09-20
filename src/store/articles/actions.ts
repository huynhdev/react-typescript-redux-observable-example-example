import { action } from 'typesafe-actions'
import { ArticlesActionTypes, Article } from './types'

export const fetchRequest = (params: Record<string, any>) => action(ArticlesActionTypes.FETCH_REQUEST, params)

export const fetchSuccess = (data: Article) => action(ArticlesActionTypes.FETCH_SUCCESS, data)

export const fetchError = (error: any) => action(ArticlesActionTypes.FETCH_ERROR, error)
