import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ArticleDetailContainer from '../../containers/ArticleDetailContainer'

interface RouteParams {
  id: string
}

const ArticleShow: React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const {
    match: { params }
  } = props
  return <ArticleDetailContainer id={params.id} />
}

export default ArticleShow
