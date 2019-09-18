import React from 'react';
import CatalogFullPost from './CatalogFullPost';
import CatalogShortPost from './CatalogShortPost';

class CatalogList extends React.Component {
  render() {
    return (
      <div className="catalog-posts-container">
        {this.props.isFullView ? (
          <div>
            <CatalogFullPost />
            <CatalogFullPost />
          </div>
        ) : (
          <CatalogShortPost />
        )}
      </div>
    );
  }
}

export default CatalogList;
