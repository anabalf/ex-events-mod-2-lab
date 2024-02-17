require('dotenv').config();
const express = require('express');
 
const app = express();

require('./configs/hbs.config');
require('./configs/db.config');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.urlencoded());

const routes = require('./configs/routes.config');
app.use('/', routes);

const port = 3000;
app.listen(port, () => console.info(`App running at port ${port}`))