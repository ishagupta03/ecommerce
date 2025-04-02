import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterState from './Context/CounterState.jsx'
import UserState from './Context/UserState.jsx'

createRoot(document.getElementById('root')).render(
    <UserState>
<CounterState>
    <App />
    </CounterState>
    </UserState>

)
