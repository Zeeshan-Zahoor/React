import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MoreChai from './MoreChai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MoreChai/>
  </StrictMode>,
)
