import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import initialReducer from './reducers/initialReducer'
import * as serviceWorker from './serviceWorker'
import App from './App'

const store = createStore(initialReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


serviceWorker.unregister();
