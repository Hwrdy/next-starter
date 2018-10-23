import React, { Component } from 'react';
import Link from 'next/link';
import { FormattedMessage, FormattedNumber } from 'react-intl';
// import Head from 'next/head';

class Page2 extends Component {
  static getInitialProps() {
    // Do something
    // console.log('2 getInit');
  }

  static getDerivedStateFromProps() {
    // console.log('2 der');
    return {};
  }

  componentDidMount() {
    // console.log('2 did');
  }

  render() {
    // const { intl } = this.props

    return (
      <div>
        <Link href="/index">
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

export default Page2;
