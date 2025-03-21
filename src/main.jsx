import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterState from './Context/CounterState.jsx'

createRoot(document.getElementById('root')).render(
<CounterState>
    <App />
    </CounterState>

)
