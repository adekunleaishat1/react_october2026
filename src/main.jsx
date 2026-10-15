import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Landing from './Landing.jsx'
import Usestateclass from './Usestateclass.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home></Home> */}
    {/* <Landing/> */}
    <Usestateclass/>
  </StrictMode>,
)
