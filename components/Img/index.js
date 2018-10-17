import React from 'react';

export default ({ src }) => (
  <picture>
    <source srcSet={require(`${src}?webp`)} type="image/webp" />
    <img src={require(src)} />
  </picture>
);