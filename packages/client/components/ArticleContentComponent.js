import React from 'react';

const AuthorQuote = ({ image, authorName, AuthorQuote }) => (
  <div className="card card-profile card-plain">
    <div className="row">
      <div className="col-md-2">
        <div className="card-avatar">
          <a href="#pablo">
            <img className="img" src={image} alt="author-avt" />
          </a>
          <div className="ripple-container"></div>
        </div>
      </div>
      <div className="col-md-8">
        <h4 className="card-title">{authorName}</h4>
        <p className="description">{AuthorQuote}</p>
      </div>
    </div>
  </div>
);

class ArticleContentComponent extends React.Component {
  render() {
    const { title, contents, tags, authorData, videoPlayer } = this.props;

    return (
      <div>
        <div className="section section-text">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <h3 className="title">{title}</h3>
              {videoPlayer}
              {contents}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="row">
              <div className="col-md-6">
                <div className="blog-tags">
                  Tags:{' '}
                  {tags &&
                    tags.map((item, key) => (
                      <span
                        className="badge badge-primary badge-pill"
                        key={key}
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <hr />
            {authorData && (
              <AuthorQuote
                image={authorData.avatar}
                authorName={authorData.fullName}
                AuthorQuote={authorData.quote}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleContentComponent;
