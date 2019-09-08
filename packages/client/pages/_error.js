import React from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import PageNotFoundComponent from '../components/PageNotFoundComponent';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return (
      <React.Fragment>
        {this.props.statusCode === 404 && (
          <HomePageLayout>
            <PageNotFoundComponent />
          </HomePageLayout>
        )}
      </React.Fragment>
    );
  }
}

export default Error;
