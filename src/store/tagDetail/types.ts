import { ArticleDetailData } from '../articleDetail/types'

export interface TagDetailData {
  id: number
  name: string
  created_at: string
  updated_at: string
  articles: ArticleDetailData[]
}

export interface TagDetail {
  code: number
  msg: string
  data?: TagDetailData[]
}

export enum TagDetailActionTypes {
  FETCH_REQUEST = '@@tag_detail/FETCH_REQUEST',
  FETCH_SUCCESS = '@@tag_detail/FETCH_SUCCESS',
  FETCH_ERROR = '@@tag_detail/FETCH_ERROR'
}

export interface TagDetailState {
  loading: boolean
  payload: Record<string, any>
  errors: string | null
}
