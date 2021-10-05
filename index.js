const express = require('express')

const app = express();

const router = require('./src/routes');
const port = process.env.PORT || 80;
app.use(router);

app.listen(port, () => console.log(`PORT ${port}`));

