import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const HeaderInner = styled.div`
  padding: 80px 40px;
`
const Nav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
  z-index: 100;
  width: 100%;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const Header = () => {
  return <Wrapper />
}

export default Header
