import React from 'react';
import './App.css';
import emojis from './emojis.json';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>
          <span role="img" aria-label="emoji gorilla">🦍</span> Emoji Search <span role="img" aria-label="emoji gorilla">🦍</span>
        </h1>
      </div>
    )
  }
}

export default App;
