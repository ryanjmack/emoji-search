import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './stylesheets/styles.css';


// add classes to the body and html element for basic styling
document.body.classList.add('body');
document.querySelector('html').classList.add('html');


// Why am I not surprised...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Browser_compatibility
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
