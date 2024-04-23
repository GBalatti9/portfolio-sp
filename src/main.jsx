import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AppRouter } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
