import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`

const HeaderInner = styled.div`
  max-width: 1192px;
  padding: 20px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-size: 33px;
  font-family: 'Bebas Neue', sans-serif;
`

const Header = () => {
  return (
    <Wrapper>
      <HeaderInner>
        <Logo>
          <a href="/">Huynh Dev</a>
        </Logo>
      </HeaderInner>
    </Wrapper>
  )
}

export default Header
