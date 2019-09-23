import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';
import CardWithSideImageComponent from '../components/CardWithSideImageComponent';
// const connectToRedux = connect(
//   createStructuredSelector(
//     {
//       categories: getAllCategorySelector
//     },
//     dispatch => ({
//       getAllCategory: () => {
//         dispatch(getAllCategory());
//       }
//     })
//   )
// );
const mockBlogPosts = [
  {
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: '/static/material/assets/img/examples/office2.jpg',
    author: 'Thanh Quy Vo',
    time: '2 days ago'
  },
  {
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: '/static/material/assets/img/examples/office2.jpg',
    author: 'Thanh Quy Vo',
    time: '2 days ago'
  },
  {
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: '/static/material/assets/img/examples/office2.jpg',
    author: 'Thanh Quy Vo',
    time: '2 days ago'
  }
];

class RandomPostsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="row">
        <div className="col-md-10 ml-auto mr-auto">
          <h2 className="title">Latest Blogposts</h2>

          {mockBlogPosts.map((item, index) => (
            <CardWithSideImageComponent
              title={item.title}
              category={item.category}
              description={item.description}
              image={item.image}
              author={item.author}
              key={index}
              time={item.time}
              imageLeft={(index + 1) % 2 !== 0} //so complex !!!
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomPostsComponent;
