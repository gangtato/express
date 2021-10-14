const express = require('express');
const cors = require('cors');

const app = express();
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

const productRouter = require('./src/product/routes');
const productRouterV2 = require('./src/product_v2/routes');
const port = process.env.PORT || 3000;
dotenv.config();

app.use(logger('dev'))
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1/', productRouter);
app.use('/api/v2/', productRouterV2);

app.listen(port, () => console.log(`PORT ${port}`));

