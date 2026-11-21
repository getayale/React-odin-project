import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Food } from './Food.jsx'
import { Pro } from './pro.jsx'
import Animal from './Animal.jsx'
import Counter from './counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
     {/* <Greeting/>
    <Food/>
    <Pro/> 
  <Animal/>  
  <Counter/> */}
  </StrictMode>,
)
