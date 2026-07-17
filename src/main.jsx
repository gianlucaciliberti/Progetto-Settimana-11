import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

