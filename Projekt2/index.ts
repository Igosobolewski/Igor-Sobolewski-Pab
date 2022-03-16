import express from 'express'
import {Request, Response} from 'express'

const app = express()

/*app.post('/:notes/:content/:createDate/:tags/:id', function (req: any, res: any){
    let title: string
    let content: string = req.params.content
    const CreateDate = new Date();
    let tags: string[]
    let id: number = 0
}*/

app.use(express.json())

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send('POST Hello World')
})



app.listen(3000)