import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import '../App.css';

export default class SearchBar extends Component {
  state = {
    query: ''
  };

  queryhandler = e => {
    const query = e.target.value;
    this.setState({ query });
    this.props.queryCallBack(query);
  };

  render() {
    return (
      <div className="SearchBar input-group mb-3">
        <div className="input-group-prepend col-1 ">
          <Link to="/">
            <i className="fas fa-arrow-circle-left" />
          </Link>
        </div>
        <div className="col-5 ">
          <DebounceInput
            type="text"
            debounceTimeout={100}
            onChange={e => this.queryhandler(e)}
          />
        </div>
        <div className="col-5 text-right">
          <h3 className="search-title">SEARCH FOR NEW BOOKS</h3>
        </div>
      </div>
    );
  }
}
