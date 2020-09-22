import React from 'react'
import styled from 'styled-components'
import { TagDetailData } from '../../store/tagDetail/types'
import { Row, Column, Container } from '../Grid'
import ArticleItem from '../Articles/ArticleItem'

import bgTitle from '../../images/bg-title.jpg'

const TagDetailWrapper = styled.div``

const TitleSection = styled.div`
  background-image: url(${bgTitle});
  text-align: center;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  h1 {
    margin: 0;
    font-family: bebas neue, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #111;
    font-size: 80px;
    padding: 40px 0;
  }
`

type Props = {
  tag: TagDetailData
}

const TagDetail: React.FC<Props> = ({ tag }) => {
  return (
    <TagDetailWrapper>
      <TitleSection>
        <h1>{tag.name}</h1>
      </TitleSection>
      <Container>
        <Row>
          {tag.articles.map((article) => (
            <Column sm={12} md={6} key={article?.id}>
              <ArticleItem article={article} />
            </Column>
          ))}
        </Row>
      </Container>
    </TagDetailWrapper>
  )
}

export default TagDetail
