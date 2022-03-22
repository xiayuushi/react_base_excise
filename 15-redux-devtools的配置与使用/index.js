import './styles/common.css'
import store from './store'

import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
