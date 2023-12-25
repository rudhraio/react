import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Provider } from 'react-redux';

import {
  RouterProvider,
} from "react-router-dom";
import router from './pages/router.tsx';
import store from './utils/store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
