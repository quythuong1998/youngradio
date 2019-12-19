import parse from 'html-react-parser';
import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ArticleDescriptionComponent from '../components/ArticleDescriptionComponent';
import PageNotFoundComponent from './PageNotFoundComponent';
import ArticleContentComponent from './ArticleContentComponent';
import ArticleCommentComponent from './ArticleCommentComponent';
import {
  getBlogRadio,
  getBlogRadioDataSelector,
  resetDataGetBlogRadio
} from '../stores/RadioState';
import {
  getAuthorByIdDataSelector,
  resetDataGetAuthorById
} from '../stores/UserState';
const URL = process.env.DOMAIN_NAME || 'http://youngradio.live';

const connectToRedux = connect(
  createStructuredSelector({
    blogRadioData: getBlogRadioDataSelector,
    authorData: getAuthorByIdDataSelector
  }),
  dispatch => ({
    getBlogRadio: id => {
      dispatch(getBlogRadio(id));
    },
    resetData: () => {
      resetDataGetBlogRadio(dispatch);
      resetDataGetAuthorById(dispatch);
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
    const { blogRadioData, authorData } = this.props;
    const contentData = blogRadioData && parse(blogRadioData.content);

    return (
      <React.Fragment>
        {!blogRadioData ? (
          <PageNotFoundComponent />
        ) : (
          <div>
            <ArticleDescriptionComponent
              title={blogRadioData.title}
              description={blogRadioData.description}
              image={blogRadioData.largeThumbnail}
            />
            <div className="main main-raised" id="content-section">
              <div className="container">
                <ArticleContentComponent
                  title={blogRadioData.title}
                  contents={contentData}
                  tags={blogRadioData.hastags}
                  videoPlayer={
                    <ReactPlayer
                      url={blogRadioData.videoURL}
                      className="react-player mt-2 mb-4"
                      playing
                      width="100%"
                      height="377px"
                    />
                  }
                  authorData={authorData}
                />

                <ArticleCommentComponent
                  url={`${URL}/radio?id=${blogRadioData.id}`}
                  postId={blogRadioData.id}
                  title={blogRadioData.title}
                />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleComponent);
