import React from 'react';
import HeaderComponent from '../components/header/HeaderComponent';

class HomePageLayout extends React.Component {
  render() {
    const { children, title, ...restProps } = this.props;
    return (
      <React.Fragment>
        <HeaderComponent />
        <div class="main">{children}</div>
      </React.Fragment>
    );
  }
}

export default HomePageLayout;
