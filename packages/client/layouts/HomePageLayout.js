import React from 'react';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';

class HomePageLayout extends React.Component {
  render() {
    const { children, title, ...restProps } = this.props;
    return (
      <React.Fragment>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default HomePageLayout;
