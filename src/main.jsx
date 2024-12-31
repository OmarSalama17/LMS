import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeDark from './component/Home/ThemeDark/ThemeDark.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeDark>
    <App />
    </ThemeDark>
  </StrictMode>,
)
