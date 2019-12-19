import React from 'react';
import BlogRadioCardComponent from './BlogRadioCardComponent';
class LastedRadioComponent extends React.Component {
  render() {
    const { lastedBlogRadio = [] } = this.props;
    return (
      <div className="row d-flex justify-content-center">
        {lastedBlogRadio && (
          <BlogRadioCardComponent
            title={lastedBlogRadio.title}
            author={lastedBlogRadio.authorName}
            length={lastedBlogRadio.length}
            description={lastedBlogRadio.description}
            smallThumbnail={lastedBlogRadio.smallThumbnail}
            largeThumbnail={lastedBlogRadio.largeThumbnail}
            id={lastedBlogRadio.id}
          />
        )}
      </div>
    );
  }
}

export default LastedRadioComponent;
