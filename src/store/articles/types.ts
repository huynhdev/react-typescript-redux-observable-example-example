export interface ArticleData extends ApiResponse {
  id: number
  title: string
  desc: string
  tag: string
  created_at: string
  updated_at: string
}
export interface Article {
  code: number
  msg: string
  data?: ArticleData[]
}

export type ApiResponse = Record<string, any>

export enum ArticlesActionTypes {
  FETCH_REQUEST = '@@articles/FETCH_REQUEST',
  FETCH_SUCCESS = '@@articles/FETCH_SUCCESS',
  FETCH_ERROR = '@@articles/FETCH_ERROR'
}

export interface ArticlesState {
  loading: boolean
  payload: Record<string, any>
  errors: string | null
  dataByIds?: Record<number, any>
  isNext: boolean
}
