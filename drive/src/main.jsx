import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Parent } from './dark_mode/parent.jsx'
import Auto from './auto_complete/auto.jsx'
import DeepClone from './deepClone/deepClone.jsx'
import Effect from './effect/effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Parent /> */}
    {/* <Auto /> */}
    {/* <DeepClone /> */}
    <Effect />
  </StrictMode>,
)
