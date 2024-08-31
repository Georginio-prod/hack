import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Content/>
  </StrictMode>,
)
