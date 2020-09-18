import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'
import normalize from './styles/normalize'
import globals from './styles/globals'
import Root from './components/layout/Root'
import IndexPage from './pages/home'

const Routes: React.FC = () => (
  <Root>
    <Global styles={normalize} />
    <Global styles={globals} />
    <Switch>
      <Route exact path="/" component={IndexPage} />
    </Switch>
  </Root>
)

export default Routes
