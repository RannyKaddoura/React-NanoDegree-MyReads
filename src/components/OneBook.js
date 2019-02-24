import React, { Component } from 'react';
import noThumbNail from './thumbNail.png';
import '../App.css';

export default class OneBook extends Component {
  render() {
    const { changeShelves, data } = this.props;

    return (
      <div className="book-card float-left col-md-3">
        {data.imageLink !== undefined && (
          <img src={data.imageLink.smallThumbnail} alt="item thumb" />
        )}

        <div className="col-md-12">
          <div className="card mb-4 shadow-sm">
            <img
              src={
                data.imageLinks !== undefined
                  ? data.imageLinks.thumbnail
                  : noThumbNail
              }
              alt="thumb"
              className="bd-placeholder-img card-img-top"
              style={{ width: '150px', height: '195px' }}
              preserveAspectRatio="xMidYMid slice"
            />
            <div className="dropdown">
              <button
                className="menu btn btn-secondary "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="fas fa-arrow-alt-circle-down" />
              </button>
              <div className="dropdown-menu">
                <strong>Move too</strong>
                <p
                  onClick={() => changeShelves(data.id, 'currentlyReading')}
                  className="dropdown-item">
                  Currently Reading
                </p>
                <p
                  onClick={() => changeShelves(data.id, 'read')}
                  className="dropdown-item">
                  Read
                </p>
                <p
                  onClick={() => changeShelves(data.id, 'wantToRead')}
                  className="dropdown-item">
                  Want to Read
                </p>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                {data.title}
                {data.authors}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
