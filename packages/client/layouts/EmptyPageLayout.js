import React from 'react';

class HomePageLayout extends React.Component {
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default HomePageLayout;
