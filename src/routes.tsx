import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/globals'
import Root from './components/layout/Root'
import Header from './components/layout/Header'
import IndexPage from './pages/article'
import ArticleDetail from './pages/article/show'
import TagDetail from './pages/tag/show'

const Routes: React.FC = () => (
  <Root>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/articles/:id" component={ArticleDetail} />
      <Route path="/tags/:id" component={TagDetail} />
    </Switch>
  </Root>
)

export default Routes
