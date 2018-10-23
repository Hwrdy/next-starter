/* eslint-disable import/no-dynamic-require */
const IntlPolyfill = require('intl');
const { readFileSync } = require('fs');
const { basename } = require('path');
const accepts = require('accepts');
const glob = require('glob');

// const dev = process.env.NODE_ENV !== 'production';

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const languages = glob.sync('../lang/*.json').map(f => basename(f, '.json'));

const localeDataCache = new Map();

const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];

  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');

    localeDataCache.set(lang, localeDataScript);
  }

  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => {
  return require(`../lang/${locale}.json`);
};

const intlMiddleware = (req, res, next) => {
  const accept = accepts(req);
  // const acceptLanguage = accept.language(dev ? ['en'] : languages) || 'en';
  const acceptLanguage = accept.language(languages) || 'en';
  const locale = typeof acceptLanguage === 'string' ? acceptLanguage : acceptLanguage[0];

  req.locale = locale;
  req.localeDataScript = getLocaleDataScript(locale);
  // req.messages = dev ? {} : getMessages(locale);
  req.messages = getMessages(locale);

  next();
};

module.exports = intlMiddleware;
