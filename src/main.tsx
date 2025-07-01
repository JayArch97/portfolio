import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import path from "path"


import './index.css'
import HomePage from './HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <HomePage />
    </BrowserRouter>
  </StrictMode>,
)
