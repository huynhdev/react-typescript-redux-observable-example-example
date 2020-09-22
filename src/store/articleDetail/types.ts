export interface TagData {
  id: number
  name: string
}

export interface ArticleDetailData {
  id: number
  title: string
  desc: string
  tag: TagData
  created_at: string
  updated_at: string
  cover_image_url: string
}

export interface ArticleDetail {
  code: number
  msg: string
  data?: ArticleDetailData[]
}

export enum ArticleDetailActionTypes {
  FETCH_REQUEST = '@@article_detail/FETCH_REQUEST',
  FETCH_SUCCESS = '@@article_detail/FETCH_SUCCESS',
  FETCH_ERROR = '@@article_detail/FETCH_ERROR'
}

export interface ArticleDetailState {
  loading: boolean
  payload: Record<string, any>
  errors: string | null
}
