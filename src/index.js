import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App/App'
import store from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './service/serviceWorker'
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
