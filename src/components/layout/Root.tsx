import * as React from 'react'
import styled from 'styled-components'

interface RootProps {
  className?: string
}

const Root: React.FC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Root

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`
