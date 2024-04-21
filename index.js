import express from 'express';
import indexRouter from './routes/index.js';
import eventRouter from './routes/events.js';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use('/', indexRouter);
app.use('/api/', eventRouter);

app.listen(port);