import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';
import AuthorCardComponent from './AuthorCardComponent';

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

const mockTypycalAuthors = [
  {
    name: 'Thanh Quy Vo',
    profession: 'Student @ AGU',
    quote:
      "Death is like a wind, always by my side. What the fuck? Why i'm i write this ?",
    image: '/static/material/assets/img/faces/card-profile6-square.jpg'
  },
  {
    name: 'Thanh Quy Vo',
    profession: 'Student @ AGU',
    quote:
      "Death is like a wind, always by my side. What the fuck? Why i'm i write this ?",
    image: '/static/material/assets/img/faces/card-profile6-square.jpg'
  },
  {
    name: 'Thanh Quy Vo',
    profession: 'Student @ AGU',
    quote:
      "Death is like a wind, always by my side. What the fuck? Why i'm i write this ?",
    image: '/static/material/assets/img/faces/card-profile6-square.jpg'
  }
];

class TypicalAuthorsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto text-center">
            <h2 className="title">Typical authors</h2>
          </div>
        </div>
        <div className="row">
          {mockTypycalAuthors.map((item, index) => (
            <AuthorCardComponent
              image={item.image}
              quote={item.quote}
              profession={item.profession}
              name={item.name}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TypicalAuthorsComponent;
