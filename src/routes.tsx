import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/globals'
import Root from './components/layout/Root'
import Header from './components/layout/Header'
import IndexPage from './pages/article'
import Article from './pages/article/show'

const Routes: React.FC = () => (
  <Root>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/articles/:id" component={Article} />
    </Switch>
  </Root>
)

export default Routes
