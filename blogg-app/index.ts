import express from 'express';
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('err', (err: any) => console.log(err));
db.once('open', () => console.log('Connected to the database!'));

const apiRouter = require('./routes/api');
app.use('/', apiRouter);

const PORT = 3000;
app.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));

