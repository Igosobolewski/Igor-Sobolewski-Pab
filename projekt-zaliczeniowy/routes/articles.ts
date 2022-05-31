import express  from "express";
const router = express.Router();
const Article = require('./../models/article');

router.get('/', async (req, res) => {
    try {
      const article = await Article.find()
      res.json(article)
    } catch (err: any) {
      res.status(500).json({ message: err.message })
    }
  })

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() });
})

router.get('/:id', async(req, res) => {
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article })
})

router.post('/', async(req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`);
    } catch (err) {
        console.log(err);
        res.render('articles/new', { article: article });
    }
})

router.post('/add', async (req, res) => {
    const article = new Article({
      title: req.body.title,
      description: req.body.description,
      markdown: req.body.markdown
    })
    try {
      const newArticle = await article.save()
      res.status(201).json(newArticle)
    } catch (err: any) {
      res.status(400).json({ message: err.message })
    }
  })

router.delete('/:id', async(req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})


module.exports = router;