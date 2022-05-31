const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const DB = mongoose.connection;
DB.on('err', (err: any) => console.log(err))
DB.once('open', () => console.log('Connected to the database!'));

app.get('/', (req: any, res: any) => {
    res.json('Hello World')
})


app.listen(3000);