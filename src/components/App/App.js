import React from 'react';
import './App.css';
import Search from '../Search/Search';
import EmojiList from '../EmojiList/EmojiList';
import emojis from './emojis.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    // the initial state is all of the emojis
    this.state = ({
      results: emojis
    });

    this.returnSearchResults = this.returnSearchResults.bind(this);
  }


  // handler that we'll pass to the Search component
  returnSearchResults(emojis) {
    this.setState({
      results: emojis
    })
  }


  render() {
    return (
      <div className="App">
        <h1>
          <span role="img" aria-label="ghost emoji">👻</span> Emoji Search <span role="img" aria-label="ghost emoji">👻</span>
        </h1>
        <Search emojis={emojis} returnSearchResults={this.returnSearchResults} />
        <EmojiList emojis={this.state.results} />
      </div>
    )
  }
}

export default App;
