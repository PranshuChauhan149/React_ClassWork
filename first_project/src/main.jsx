import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const or = <ol>
  <li>Wake up</li>
  <li>Brush your teeth</li>
  <li>Eat breakfast</li>
</ol>

const un = <ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {or}
    {un}
  </StrictMode>,
)
