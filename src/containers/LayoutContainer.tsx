import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../store'
import { ThemeColors } from '../store/layout'
import * as layoutActions from '../store/layout/actions'

interface LayoutContainerProps {
  theme: ThemeColors
  setTheme: (theme: ThemeColors) => void
}

interface LayoutContainerRenderProps {
  render?: (props: LayoutContainerProps) => React.ReactElement
  children?: (props: LayoutContainerProps) => React.ReactElement
}

const LayoutContainer: React.FC<LayoutContainerRenderProps> = ({ render, children }) => {
  const { theme } = useSelector((state: ApplicationState) => state.layout)
  const dispatch = useDispatch()

  const setTheme = (color: ThemeColors) => dispatch(layoutActions.setTheme(color))

  if (render) {
    return render({ theme, setTheme })
  }

  if (children) {
    return children({ theme, setTheme })
  }

  return null
}

export default LayoutContainer
