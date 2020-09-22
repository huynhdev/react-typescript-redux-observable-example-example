import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequest } from '../store/articleDetail/actions'
import ArticleDetail from '../components/ArticleDetail/ArticleDetail'
import { ApplicationState } from '../store'

type Props = {
  id: string
}

const ArticleDetailContainer: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRequest(id))
  }, [])

  const articleDetail = useSelector((state: ApplicationState) => state.articleDetail)
  const article = articleDetail.payload.data
  if (!article) return null
  return <ArticleDetail article={article} />
}

export default ArticleDetailContainer
