import styled from 'styled-components'

const Container = styled.div`
  max-width: 540px;
  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export default Container
