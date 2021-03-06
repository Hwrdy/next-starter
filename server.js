const express = require('express');
const next = require('next');
const intlMiddleware = require('./middlewares/intlMiddleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(intlMiddleware);

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      // console.log(`> Ready on http://localhost:${port}`);
    });
  });
