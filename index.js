const express = require('express')

const app = express();

const router = require('./src/routes');

app.use(router);

app.listen(3000, () => console.log('PORT 3000'));

