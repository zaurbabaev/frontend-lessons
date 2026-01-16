import { createRoot } from 'react-dom/client'
import "./index.css"
import Books from './components/Books'
import Cars from './components/Cars'

createRoot(document.getElementById('root')).render(
  <>
  <Books/>
  <Cars/>
  </>
)
