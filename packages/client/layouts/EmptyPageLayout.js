import React from 'react';
import FooterComponent from '../components/footer/FooterComponent';

class HomePageLayout extends React.Component {
  render() {
    const { children, title, ...restProps } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default HomePageLayout;
