// import parse from 'html-react-parser';
import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ArticleDescriptionComponent from '../components/ArticleDescriptionComponent';
import {
  getBlogRadio,
  getBlogRadioDataSelector,
  resetDataGetBlogRadio
} from '../stores/RadioState';

const connectToRedux = connect(
  createStructuredSelector({
    blogRadioData: getBlogRadioDataSelector
  }),
  dispatch => ({
    getBlogRadio: id => {
      dispatch(getBlogRadio(id));
    },
    resetData: () => {
      resetDataGetBlogRadio(dispatch);
    }
  })
);

class ArticleComponent extends React.Component {
  componentDidMount() {
    const { blogRadioId } = this.props;
    this.props.getBlogRadio(blogRadioId.id);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    // const { blogRadioData } = this.props;
    // const contentData = blogRadioData && parse(blogRadioData.content);
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1
    //   }
    // };
    return (
      <React.Fragment>
        <link rel="stylesheet" href="/static/customs/video-react.css" />
        {/* {!articleData ? (
          <PageNotFoundComponent />
        ) : ( */}
        <div>
          <ArticleDescriptionComponent
            // title={articleData.title}
            // description={articleData.description}
            // image={articleData.imageDescription}
            title={'TEST NE'}
            description={'TEST NE'}
            image={'TEST NE'}
          />
          <div className="main main-raised" id="content-section">
            <div className="container">
              <div>
                <div className="section section-text">
                  <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                      <h3 className="title">{'TEST NHE'}</h3>
                      <div className="d-flex justify-content-center">
                        <ReactPlayer
                          url="https://vimeo.com/243556536"
                          className="react-player"
                          playing
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-tags">
                          {/* Tags:{' '}
                          {tags &&
                            tags.map((item, key) => (
                              <span
                                className="badge badge-primary badge-pill"
                                key={key}
                              >
                                {item}
                              </span>
                            ))} */}
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* {authorData && (
                      <AuthorQuote
                        image={authorData.avatar}
                        authorName={authorData.fullName}
                        AuthorQuote={authorData.quote}
                      />
                    )} */}
                  </div>
                </div>
              </div>
              {/* <ArticleContentComponent
                  title={articleData.title}
                  contents={contentData}
                  tags={articleData.hastags}
                  authorData={authorData}
                /> */}

              {/* <ArticleCommentComponent articleData={articleData} /> */}
            </div>
          </div>
        </div>
        {/* )} */}
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleComponent);
