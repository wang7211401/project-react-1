import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';

ReactDOM.render(<Welcome name="frank"/>,
  document.getElementById('root'));
registerServiceWorker();
