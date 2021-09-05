import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR';
import * as axios from "axios";

axios.defaults.baseURL = 'https://5664-191-185-197-51.ngrok.io';
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
