/* eslint-disable no-underscore-dangle */
import React from 'react';
import App, { Container } from 'next/app';
import { IntlProvider, addLocaleData } from 'react-intl';

if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

export default class MyApp extends App {
  static async getInitialProps({ Component, /* router, */ ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;
    const now = Date.now();

    return (
      <Container>
        <IntlProvider locale={locale} messages={messages} initialNow={now}>
          <Component {...pageProps} />
        </IntlProvider>
      </Container>
    );
  }
}
