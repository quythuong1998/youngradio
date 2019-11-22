import React from 'react';

import Disqus from 'disqus-react';
const URL = process.env.DOMAIN_NAME || 'development';
const disqusShortname = process.env.DISQUS_SHORT_NAME || 'youngradio';

class ArticleCommentComponent extends React.Component {
  render() {
    const disqusConfig = {
      url: `${URL}/article?id=${this.props.articleData.id}`,
      identifier: this.props.articleData.articleId,
      title: this.props.articleData.title
    };

    return (
      <div className="section section-comments">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleCommentComponent;
