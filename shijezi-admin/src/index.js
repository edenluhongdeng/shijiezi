import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeightHoc from "./HeightHoc"
import PageDown from "./PageDown.jsx"
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.StrictMode>
    {/* <HeightHoc /> */}
    {/* <App /> */}
    <PageDown />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
