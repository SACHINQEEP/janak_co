import App from './App'
import './index.scss'


import createRoot from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot.createRoot(container!)
root.render(<App />)
