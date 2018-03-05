import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/app.js';
import registerServiceWorker from './registerServiceWorker';
import Todo from './todo/todo';
import About from './about/about';

ReactDOM.render(
    <div>
      <Todo />
      <About />
    </div>
  , document.getElementById('root'));
registerServiceWorker();
