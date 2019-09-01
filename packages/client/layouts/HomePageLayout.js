import React from 'react';

class HomePageLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/material/assets/css/material-kit.min.css"
        />
        {children}
      </div>
    );
  }
}

export default HomePageLayout;
