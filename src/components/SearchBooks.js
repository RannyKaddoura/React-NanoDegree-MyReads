import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { search } from '../BooksAPI';
import OneBook from './OneBook';
import '../App.css';

export default class SearchBooks extends Component {
  state = {
    searchResults: [],
    error: false
  };

  queryCallBack = query => {
    if (query !== '') {
      search(query).then(searchResults => {
        if (searchResults.error === undefined) {
          this.setState(
            { searchResults, error: false },
            console.log('search res error', searchResults)
          );
        } else {
          this.setState({ error: true });
        }
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { searchResults, error } = this.state;
    const { changeShelves } = this.props;

    if (error) {
      return (
        <div className="error">
          <h4>There is no results, please click</h4>
          <h3 onClick={() => this.setState({ error: false })}>here</h3>
          <h4>to try again</h4>
        </div>
      );
    }
    return (
      <div className="SearchBooks row">
        <div className="search-bar col-12">
          <SearchBar queryCallBack={this.queryCallBack} />
        </div>
        <div className="results-container col-12">
          {searchResults.length !== 0 &&
            searchResults.map(data => (
              <OneBook
                key={data.id}
                data={data}
                changeShelves={changeShelves}
              />
            ))}
        </div>
      </div>
    );
  }
}
