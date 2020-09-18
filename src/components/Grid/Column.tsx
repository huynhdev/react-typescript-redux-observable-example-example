import styled from 'styled-components'

function getWidthString(span?: number): string | undefined {
  if (!span) return
  const width = (span / 12) * 100
  return `width: ${width}%;`
}

interface WidthProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

const Column = styled.div`
  float: left;
  ${(props: WidthProps) => (props.xs ? getWidthString(props.xs) : 'width: 100%')}
  @media only screen and (min-width: 768px) {
    ${(props: WidthProps) => props.sm && getWidthString(props.sm)}
  }
  @media only screen and (min-width: 992px) {
    ${(props: WidthProps) => props.md && getWidthString(props.md)}
  }
  @media only screen and (min-width: 1200px) {
    ${(props: WidthProps) => props.lg && getWidthString(props.lg)}
  }
`

export default Column
