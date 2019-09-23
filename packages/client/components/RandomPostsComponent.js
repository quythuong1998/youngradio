import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';
import CardWithTopImageComponent from './CardWithTopImageComponent';

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
    image: '/static/material/assets/img/examples/office2.jpg'
  },
  {
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: '/static/material/assets/img/examples/office2.jpg'
  },
  {
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: '/static/material/assets/img/examples/office2.jpg'
  }
];

class RandomPostsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="section">
        <h2 className="title text-center">You may also be interested in</h2>
        <ul className="nav nav-pills nav-pills-primary justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#pill1" data-toggle="tab">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill2" data-toggle="tab">
              World
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Arts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Tech
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Business
            </a>
          </li>
        </ul>
        {/* <div className="tab-content tab-space">
              <div className="tab-pane active" id="pill1">
                bla bla
              </div>
              <div className="tab-pane" id="pill2">
                {' '}
                bla bla2
              </div>
              <div className="tab-pane" id="pill3">
                {' '}
                bla bl3
              </div>
              <div className="tab-pane" id="pill4">
                {' '}
                bla bl4
              </div>
            </div> */}

        <div className="row">
          {mockBlogPosts.map((item, index) => (
            <CardWithTopImageComponent
              category={item.category}
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomPostsComponent;
