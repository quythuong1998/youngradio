import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';
import MostViewPostsComponent from '../components/MostViewPostsComponent';
import RandomPostsComponent from '../components/RandomPostsComponent';
import TypicalAuthorsComponent from '../components/TypicalAuthorsComponent';
import LastedPostsComponent from '../components/LastedPostsComponent';
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

class IndexBodyComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }

  render() {
    return (
      <div className="main main-raised">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">From my heart with love ...</h2>
              </div>
            </div>
          </div>
          <MostViewPostsComponent />
          <LastedPostsComponent />
          <RandomPostsComponent />
          <TypicalAuthorsComponent />
        </div>
      </div>
    );
  }
}

export default IndexBodyComponent;
