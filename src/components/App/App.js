import React from 'react';
import './App.css';
import EmojiList from '../EmojiList/EmojiList';
import emojis from './emojis.json';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Emoji Search</h1>
        <EmojiList emojis={emojis} />
      </div>
    )
  }
}

export default App;
