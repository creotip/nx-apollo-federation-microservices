import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './app/app'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
