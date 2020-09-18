import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'
import { ThemeProvider } from 'styled-components'
import { ApplicationState } from './store'
import LayoutContainer from './containers/LayoutContainer'
import * as themes from './styles/theme'
import Routes from './routes'

interface AppProps {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LayoutContainer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme]}>
              <Routes />
            </ThemeProvider>
          )}
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
