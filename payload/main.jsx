import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import global_store from './REDUX/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={global_store}>
    <App />
    </Provider>
  </StrictMode>,
)
