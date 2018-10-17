const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      progressive: true,
      quality: 65,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
      ],
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  }],
]);