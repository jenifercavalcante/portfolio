import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import Web from './Web.tsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Web />
  </BrowserRouter>,
)
