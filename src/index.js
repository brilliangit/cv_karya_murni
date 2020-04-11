import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Root from './container/root/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
