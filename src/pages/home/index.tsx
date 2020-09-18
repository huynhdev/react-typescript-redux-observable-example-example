import React from 'react'
import styled from 'styled-components'
import { Row, Column, Container } from '../../components/Grid'
import device from '../../styles/utils/device'

const Desc = styled.div`
  z-index: 100;
  position: relative;
  margin-top: -21.5px;
  padding: 0 30px;
  h3 {
    transition: all 0.7s;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #111;
    font-size: 32px;
    @media ${device.tablet} {
      font-size: 45px;
    }
    line-height: 43px;
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

export default function Home() {
  return (
    <Container>
      <Row>
        <Column sm={12} md={6}>
          <ArticleWrapper>
            <ArticleInner>
              <ImageOuter>
                <img src="https://pelicula.qodeinteractive.com/wp-content/uploads/2020/04/home-9-port-1.jpg" alt="" />
              </ImageOuter>
              <Desc>
                <h3>Negasonic Teenage</h3>
                <Tag>comic</Tag>
              </Desc>
            </ArticleInner>
          </ArticleWrapper>
        </Column>
        <Column sm={12} md={6}>
          <ArticleWrapper>
            <ArticleInner>
              <ImageOuter>
                <img src="https://pelicula.qodeinteractive.com/wp-content/uploads/2020/04/home-9-port-2.jpg" alt="" />
              </ImageOuter>
              <Desc>
                <h3>On inch man</h3>
                <Tag>romantic</Tag>
              </Desc>
            </ArticleInner>
          </ArticleWrapper>
        </Column>
      </Row>
    </Container>
  )
}
