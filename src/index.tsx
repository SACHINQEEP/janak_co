import App from './App'
import './index.scss'


// eslint-disable-next-line import/order
import createRoot from 'react-dom/client'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot.createRoot(container!)
root.render(<App />)
