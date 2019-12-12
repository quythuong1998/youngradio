import React from 'react';
import Link from 'next/link';
const AuthorQuote = ({ image, authorName, authorQuote, authorId }) => (
  <div className="card card-profile card-plain">
    <div className="row">
      <div className="col-md-2">
        <div className="card-avatar">
          <Link href={`/user?id=${authorId}`}>
            <a href="#pablo">
              <img className="img" src={image} alt="author-avt" />
            </a>
          </Link>
          <div className="ripple-container"></div>
        </div>
      </div>
      <div className="col-md-8">
        <h4 className="card-title">{authorName}</h4>
        <p className="description">{authorQuote}</p>
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
                      <Link href={`/hastag?keyword=${item.id}`}>
                        <a>
                          <span
                            className="badge badge-primary badge-pill ml-2"
                            key={key}
                          >
                            #{item}
                          </span>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <hr />
            {authorData && (
              <AuthorQuote
                image={authorData.avatar}
                authorName={authorData.fullName}
                authorQuote={authorData.quote}
                authorId={authorData.id}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleContentComponent;
