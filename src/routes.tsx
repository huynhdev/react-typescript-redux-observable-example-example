import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/globals'
import Root from './components/layout/Root'
import Header from './components/layout/Header'
import IndexPage from './pages/home'

const Routes: React.FC = () => (
  <Root>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
    </Switch>
  </Root>
)

export default Routes
