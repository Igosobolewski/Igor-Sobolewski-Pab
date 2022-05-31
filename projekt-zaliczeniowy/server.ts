const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const Article = require('./models/article')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const DB = mongoose.connection;
DB.on('err', (err: any) => console.log(err))
DB.once('open', () => console.log('Connected to the database!'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async(req: any, res: any) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', { articles: articles });
})

app.use('/articles', articleRouter);


app.listen(3000);