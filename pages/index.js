import React from 'react'
import Link from 'next/link';

export default class extends React.Component {
  static async getInitialProps(param) {
    return {};
  }

  render() {
    return (
      <div>
        Page1
        <Link href={{ pathname: '/page2', query: { name: 'Zeit' } }}>
          <a>here</a>
        </Link>
      </div>
    )
  }
}