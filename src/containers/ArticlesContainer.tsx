import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequest } from '../store/articles/actions'
import { Row, Column, Container } from '../components/Grid'
import ArticleItem from '../components/Articles/ArticleItem'
import { ApplicationState } from '../store'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

export default function ArticlesContainer() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  const articles = useSelector((state: ApplicationState) => state.articles)

  const fetchMoreItems = () => {
    const newPage = page + 1
    setPage(newPage)
  }

  const enableInfiniteScroll = articles.isNext
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems, enableInfiniteScroll)

  useEffect(() => {
    dispatch(fetchRequest({ page }))
    setIsFetching(false)
  }, [page])

  const renderItem = (id: string) => {
    const articleId: number = +id

    const article = articles?.dataByIds?.[articleId]
    return (
      <Column sm={12} md={6} key={article?.id}>
        <ArticleItem {...article} />
      </Column>
    )
  }

  const articleIds: string[] = Object.keys(articles.dataByIds || [])

  return (
    <Container>
      <Row>{articleIds.map((id: string) => renderItem(id))}</Row>
    </Container>
  )
}
