import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getAuthorById,
  getAuthorByIdDataSelector,
  resetDataGetAuthorById
} from '../stores/UserState';
const connectToRedux = connect(
  createStructuredSelector({
    authorData: getAuthorByIdDataSelector
  }),
  dispatch => ({
    GetAuthorById: authorId => {
      authorId && dispatch(getAuthorById(authorId));
    },
    resetData: () => {
      resetDataGetAuthorById(dispatch);
    }
  })
);

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
      <div className="col-md-10">
        <h4 className="card-title">{authorName}</h4>
        <p className="description">{AuthorQuote}</p>
      </div>
    </div>
  </div>
);

class ArticleContentComponent extends React.Component {
  componentWillUnmount() {
    this.props.resetData();
  }

  componentDidMount() {
    const { authorId } = this.props;
    this.props.GetAuthorById(authorId);
  }

  render() {
    const { title, contents, tags, authorData } = this.props;

    return (
      <div className="main main-raised" id="content-section">
        <div className="container">
          <div className="section section-text">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h3 className="title">{title}</h3>
                {contents}
              </div>
            </div>
          </div>
          <div className="section section-blog-info">
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
          {/* <div className="section section-comments">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="media-area">
              <h3 className="title text-center">3 Comments</h3>
              <div className="media">
                <a className="float-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      src="../assets/img/faces/card-profile4-square.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Tina Andrew
                    <small>&#xB7; 7 minutes ago</small>
                  </h4>
                  <h6 className="text-muted"></h6>
                  <p>
                    Chance too good. God level bars. I&apos;m so proud of
                    @LifeOfDesiigner #1 song in the country. Panda! Don&apos;t
                    be scared of the truth because we need to restart the human
                    foundation in truth I stand with the most humility. We are
                    so blessed!
                  </p>
                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-link float-right"
                      rel="tooltip"
                      title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reply
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-danger btn-link float-right"
                    >
                      <i className="material-icons">favorite</i> 243
                    </a>
                  </div>
                </div>
              </div>
              <div className="media">
                <a className="float-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      alt="Tim Picture"
                      src="../assets/img/faces/card-profile1-square.jpg"
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    John Camber
                    <small>&#xB7; Yesterday</small>
                  </h4>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p> Don&apos;t forget, You&apos;re Awesome!</p>
                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-link float-right"
                      rel="tooltip"
                      title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reply
                    </a>
                    <a href="#pablo" className="btn btn-link float-right">
                      <i className="material-icons">favorite</i> 25
                    </a>
                  </div>
                  <div className="media">
                    <a className="float-left" href="#pablo">
                      <div className="avatar">
                        <img
                          className="media-object"
                          alt="64x64"
                          src="../assets/img/faces/card-profile4-square.jpg"
                        />
                      </div>
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">
                        Tina Andrew
                        <small>&#xB7; 12 Hours Ago</small>
                      </h4>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p> Don&apos;t forget, You&apos;re Awesome!</p>
                      <div className="media-footer">
                        <a
                          href="#pablo"
                          className="btn btn-primary btn-link float-right"
                          rel="tooltip"
                          title="Reply to Comment"
                        >
                          <i className="material-icons">reply</i> Reply
                        </a>
                        <a
                          href="#pablo"
                          className="btn btn-link btn-secondary float-right"
                        >
                          <i className="material-icons">favorite</i> 2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="title text-center">Post your comment</h3>
            <div className="media media-post">
              <a className="author float-left" href="#pablo">
                <div className="avatar">
                  <img
                    className="media-object"
                    alt="64x64"
                    src="../assets/img/faces/card-profile6-square.jpg"
                  />
                </div>
              </a>
              <div className="media-body">
                <div className="form-group label-floating bmd-form-group">
                  <label
                    className="form-control-label bmd-label-floating"
                    for="exampleBlogPost"
                  >
                    {' '}
                    Write some nice stuff or nothing...
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="exampleBlogPost"
                  ></textarea>
                </div>
                <div className="media-footer">
                  <a
                    href="#pablo"
                    className="btn btn-primary btn-round btn-wd float-right"
                  >
                    Post Comment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    );
  }
}

export default connectToRedux(ArticleContentComponent);
