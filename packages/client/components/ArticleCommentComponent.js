import React from 'react';

import Disqus from 'disqus-react';
const disqusShortname = process.env.DISQUS_SHORT_NAME || 'youngradio';

class ArticleCommentComponent extends React.Component {
  render() {
    const { url, postId, title } = this.props;
    const disqusConfig = {
      url,
      identifier: postId,
      title
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
