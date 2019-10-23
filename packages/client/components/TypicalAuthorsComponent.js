import React from 'react';
import AuthorCardComponent from './AuthorCardComponent';

class TypicalAuthorsComponent extends React.Component {
  render() {
    const { typycalUsersData } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto text-center">
            <h2 className="title">Typical authors</h2>
          </div>
        </div>
        <div className="row">
          {typycalUsersData &&
            typycalUsersData.map((item, index) => (
              <AuthorCardComponent
                image={item.avatar}
                quote={item.quote}
                profession={item.profession}
                name={item.fullName}
                key={index}
                userId={item.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default TypicalAuthorsComponent;
