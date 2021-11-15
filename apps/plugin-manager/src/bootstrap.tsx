import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app/app'
import { store } from '@monorepo-microservices/redux-store'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
