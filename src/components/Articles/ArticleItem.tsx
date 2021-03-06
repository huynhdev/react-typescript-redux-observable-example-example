import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import device from '../../styles/utils/device'
import { ArticleData } from '../../store/articles/types'

const Desc = styled.div`
  z-index: 100;
  position: relative;
  margin-top: -25px;
  padding: 0 30px;
  a {
    text-decoration: none;
  }
  h3 {
    transition: all 0.7s;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #111;
    font-size: 25px;
    @media ${device.tablet} {
      font-size: 30px;
    }
    letter-spacing: 0.06em;
    margin: 0;
  }
`

const ArticleInner = styled.div`
  position: relative;
`

const ImageOuter = styled.div`
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  img {
    transition: transform 0.7s;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
    z-index: 1;
  }
`

interface ImageProps {
  imgUrl: string
}

const Img = styled.div`
  background-image: url(${(props: ImageProps) => props.imgUrl});
  height: 150px;
  @media ${device.tablet} {
    height: 250px;
  }
  width: 100%;
  background-size: cover;
  background-position: center;
`

const ArticleWrapper = styled.div`
  padding: 0 25px;
  margin: 0 0 50px;
  &:hover ${Desc} {
    h3 {
      transform: translateX(7px);
    }
  }
  &:hover ${ImageOuter} {
    img {
      transform: scale(1.03);
    }
  }
`

const Tag = styled.div`
  font-family: 'Open-sans', sans-serif;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  color: #6d6d6d;
`

type Props = {
  article: ArticleData
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <ArticleWrapper>
      <ArticleInner>
        <ImageOuter>
          <a href={`/articles/${article.id}`} />
          <Img imgUrl={article.cover_image_url} />
        </ImageOuter>
        <Desc>
          <a href={`/articles/${article.id}`}>
            <h3>{article.title}</h3>
          </a>
          <a href={`/tags/${article.tag.id}`}>
            <Tag>{article.tag.name}</Tag>
          </a>
        </Desc>
      </ArticleInner>
    </ArticleWrapper>
  )
}

export default ArticleItem
