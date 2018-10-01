import React from 'react';
import './EmojiList.css';


class EmojiList extends React.Component {
  constructor(props) {
    super(props);

    this.copyEmoji    = this.copyEmoji.bind(this);
    this.generateList = this.generateList.bind(this);
  }


  // allows the user to click on a row and copy that emoji to the clipboard
  copyEmoji(e) {
    const emoji = e.target.dataset.emoji;

    // may seem a tad hacky, but the clipboard doesn't support any elements other than input elements
    // I didn't want to add a dependency for something that could be done in < 10 lines
    // https://stackoverflow.com/a/38672314/6894170
    const textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = 0;
    textarea.value = emoji;
    document.body.appendChild(textarea);

    // copy the element to the clipboard
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }


  /***********************************************************************
  * Method that generates rows from the list of emojis fed in.
  *
  * One of the key components is the data-emoji attribute. It may seem
  * like redundancy, but utilizing this allows for a single event listener
  * (event delegation) instead of possibly ~2k onClick event listeners
  *
  * The copy method needs to be able to pull the emoji no matter what
  * element in the entire list is clicked on.
  ***********************************************************************/
  generateList() {

    // in regards to the key value -  // https://stackoverflow.com/a/43892905/6894170
    // aria-label and role attributes are for screen readers
    return this.props.emojis.map((emoji, i) => {
      return (
        <div key={i} className="emoji-list__row" data-emoji={emoji.symbol}>
          <div className="info">
            <span className="symbol" role="img" aria-label={emoji.title} data-emoji={emoji.symbol}>{emoji.symbol}</span>
            <span className="title" data-emoji={emoji.symbol}>{emoji.title}</span>
          </div>
          <span className="click-instructions" data-emoji={emoji.symbol}>Click to copy emoji</span>
        </div>
      );
    });
  }


  render() {
    return (
      <div className="EmojiList" onClick={this.copyEmoji}>
        {this.generateList()}
      </div>
    )
  }
}


export default EmojiList;
