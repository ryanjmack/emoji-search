import React from 'react';
import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.filterResults = this.filterResults.bind(this);
  }

  filterResults(e) {
    const input = e.target.value;

     this.props.returnSearchResults(
      this.props.emojis.filter(emoji => {
        return Boolean(emoji.title.includes(input) || emoji.keywords.includes(input));
      })
    )
  }

  render() {
    return (
      <div className="Search">
        <input type="text" onChange={this.filterResults} placeholder="Search emojis..."></input>
      </div>
    );
  }
}

export default Search;
