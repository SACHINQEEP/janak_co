import App from './App'
import './index.scss'


// eslint-disable-next-line import/order
import createRoot from 'react-dom/client'

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'G-TCF7CZ4FGT',
    dataLayerName: 'PageDataLayer'
};

TagManager.initialize(tagManagerArgs);

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot.createRoot(container!)
root.render(<App />)
