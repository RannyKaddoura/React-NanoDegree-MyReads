import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { get, getAll, update } from './BooksAPI';
import Books from './components/Books';
import SearchBooks from './components/SearchBooks';
import './App.css';

class App extends Component {
  state = {
    allBooks: null,
    booksGroups: [
      { name: 'currentlyReading' },
      { name: 'read' },
      { name: 'wantToRead' }
    ]
  };

  componentWillMount() {
    getAll().then(allBooks =>
      this.setState({ allBooks })
    );
  }

  changeShelves = (id, shelve) => {
    get(id).then(book => {
      update(book, shelve).then(response => {
        if (response) {
          getAll().then(allBooks => this.setState({ allBooks }));
        }
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <Books changeShelves={this.changeShelves} {...this.state} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBooks changeShelves={this.changeShelves} {...this.state} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
