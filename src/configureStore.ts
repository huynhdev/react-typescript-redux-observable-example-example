import { Store, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ApplicationState, rootReducer, rootEpic } from './store'

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
  const epicMiddleware = createEpicMiddleware()
  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}
