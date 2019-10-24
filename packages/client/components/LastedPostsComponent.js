import React from 'react';

import CardWithSideImageComponent from '../components/CardWithSideImageComponent';

class RandomPostsComponent extends React.Component {
  render() {
    const { lastedArticlesData } = this.props;
    return (
      <React.Fragment>
        <h2 className="title">Latest Blogposts</h2>
        <div className="row">
          {lastedArticlesData &&
            lastedArticlesData.map((item, index) => (
              <CardWithSideImageComponent
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.imageDescription}
                author={item.authorName}
                key={index}
                time={item.createdAt}
                authorAvatar={item.authorAvatar}
                authorId={item.authorId}
                articleId={item.id}
              />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default RandomPostsComponent;
