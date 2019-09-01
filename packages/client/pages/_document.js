import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

//theme by user info or server config
const THEME = 'royal-blue';

const getThemeUrl = (themeUI = 'bermuda-gray') =>
  `/static/kosmo/assets/styles/themes/${themeUI}.min.css`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const themeName = THEME;
    return { ...initialProps, themeName };
  }

  render() {
    const rootProps = this.props;

    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="RevPayment" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#466bde"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="QR Scanner" />
          <meta name="msapplication-TileColor" content="#466bde" />
          <meta
            name="msapplication-TileImage"
            content="/static/kosmo/assets/img/icon-150.png"
          />
          <meta name="theme-color" content="#fff" />

          <link
            href="/static/material/assets/css/.min.css?v=2.1.1"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          />
        </Head>
        <body className=" ">
          <div id="mobile-overlay" className="ks-mobile-overlay" />
          <Main {...rootProps} />
          <NextScript />
          <script src="/static/kosmo/libs/jquery/jquery.min.js" />
          <script src="/static/kosmo/libs/popper/popper.min.js" />
          <script src="/static/kosmo/libs/bootstrap/js/bootstrap.min.js" />
          <script src="/static/kosmo/libs/jscrollpane/jquery.jscrollpane.min.js" />
          <script src="/static/kosmo/libs/jscrollpane/jquery.mousewheel.js" />
          <script src="/static/kosmo/libs/flexibility/flexibility.js" />
          <script src="/static/kosmo/libs/velocity/velocity.min.js" />
          <script src="/static/kosmo/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js" />
          <script src="/static/customs/sc-common.js" />

          <script src="/static/material/assets/js/core/jquery.min.js" />
          <script src="/static/material/assets/js/core/popper.min.js" />
          <script src="/static/material/assets/js/core/bootstrap-material-design.min.js" />
          <script src="/static/material/assets/js/plugins/moment.min.js" />
          <script src="/static/material/assets/js/plugins/bootstrap-datetimepicker.js" />
          <script src="/static/material/assets/js/plugins/nouislider.min.js" />
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          />

          <script src="/static/material/assets/js/plugins/bootstrap-tagsinput.js" />

          <script src="/static/material/assets/js/plugins/bootstrap-selectpicker.js" />

          <script src="/static/material/assets/js/plugins/jasny-bootstrap.min.js" />

          <script async defer src="https://buttons.github.io/buttons.js" />

          <script src="/static/material/assets/js/material-kit.js?v=2.1.1" />
        </body>
      </html>
    );
  }
}
