import express from 'express';
import indexRouter from 'routes/index.js';

const app = express();
const port = 3000;

app.use('/', indexRouter);

app.listen(port);