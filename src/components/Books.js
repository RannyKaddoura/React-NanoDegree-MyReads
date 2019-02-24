import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OneBook from './OneBook';
import '../App.css';

export default class Books extends Component {
  render() {
    const { allBooks, booksGroups, changeShelves } = this.props;
    return (
      <div>
        <header>
          <div>BOOKS</div>
        </header>
        <div className="books ">
          {booksGroups.map((groups, idx) => (
            <div className="row" key={idx}>
              <h3 className="col-12">
                {groups.name === 'currentlyReading' && 'Currently Reading'}
                {groups.name === 'wantToRead' && 'Want To Read'}
                {groups.name === 'read' && 'Read'}
              </h3>
              {allBooks !== null &&
                allBooks
                  .filter(item => item.shelf === groups.name)
                  .map(data => (
                    <OneBook
                      key={data.id}
                      data={data}
                      changeShelves={changeShelves}
                    />
                  ))}
            </div>
          ))}
        </div>
        <div className="text-right search col-12">
          <Link to="/search">
            <i className="fas fa-plus-circle" />
          </Link>
        </div>
      </div>
    );
  }
}
