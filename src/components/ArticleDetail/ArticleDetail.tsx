import React from 'react'
import styled from 'styled-components'
import device from '../../styles/utils/device'

import { ArticleDetailData } from '../../store/articleDetail/types'
import { Row, Column, Container } from '../Grid'

type Props = {
  article: ArticleDetailData
}

const Tag = styled.button`
  font-family: bebas neue, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #6d6d6d;
  margin: 19px 0;
`

const Title = styled.h2`
  font-family: bebas neue, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #111;
  font-size: 45px;
  letter-spacing: 0.05em;
  margin: 0 0 27px;
`

const Desc = styled.p`
  font-family: open sans, sans-serif;
  font-size: 14px;
  line-height: 1.857em;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #6d6d6d;
  margin: 0;
  @media ${device.laptop} {
    border-right: 2px solid rgba(1, 1, 1, 0.2);
  }
  padding-right: 50px;
  margin-bottom: 20px;
`

interface ImageProps {
  imgUrl: string
}

const ThumbailImg = styled.div`
  background-image: url(${(props: ImageProps) => props.imgUrl});
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`

const InfoItems = styled.div`
  display: flex;
  flex-directory: row;
  h5 {
    flex-basis: 153px;
    font-family: bebas neue, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #111;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.3em;
    margin: 0;
  }
  p {
    font-size: 16px;
    color: #6d6d6d;
    margin: 0;
    letter-spacing: 0.2em;
  }
`

const ArticleDetail: React.FC<Props> = ({ article }) => {
  const createdAt = new Date(article.created_at).toLocaleDateString()
  return (
    <Container>
      <Row>
        <ThumbailImg imgUrl={article.cover_image_url} />
        <Tag as="a" href={`/tags/${article.tag.id}`}>
          {article.tag.name}
        </Tag>
        <Title>{article.title}</Title>
        <Column md={8}>
          <Desc>{article.desc}</Desc>
        </Column>
        <Column md={4}>
          <InfoItems>
            <h5>Created At:</h5>
            <p> {createdAt}</p>
          </InfoItems>
          <InfoItems>
            <h5>Author:</h5>
            <p>HuynhDev</p>
          </InfoItems>
        </Column>
      </Row>
    </Container>
  )
}

export default ArticleDetail
