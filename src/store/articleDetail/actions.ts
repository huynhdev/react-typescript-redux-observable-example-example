import { action } from 'typesafe-actions'
import { ArticleDetailActionTypes, ArticleDetail } from './types'

export const fetchRequest = (id: string) => action(ArticleDetailActionTypes.FETCH_REQUEST, id)

export const fetchSuccess = (data: ArticleDetail) => action(ArticleDetailActionTypes.FETCH_SUCCESS, data)

export const fetchError = (error: any) => action(ArticleDetailActionTypes.FETCH_ERROR, error)
