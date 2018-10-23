import React from 'react';
import Link from 'next/link';
import { FormattedMessage, FormattedNumber } from 'react-intl';
// import Head from 'next/head';

class Index extends React.Component {
  static getInitialProps() {
  }

  render() {
    // const { intl } = this.props
    // console.log('ren');

    return (
      <div>
        <Link href="/page2">
          <a>here</a>
        </Link>
        <p>
          <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
        </p>
        <p>
          <FormattedNumber value={1000} />
        </p>
      </div>
    );
  }
}

export default Index;
