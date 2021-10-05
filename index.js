const express = require('express')

const app = express();

const router = require('./src/routes');

app.use(router);

app.listen(443, () => console.log('PORT 443'));

