import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

interface Note {
  id?: number
  title: string;
  content: string;
  createDate: string;
  tags: string[];
}

const notes : Note[] =[
  {
    id: 1,
    title: "test",
    content: "this is a test note",
    createDate: "rndDate",
    tags: ["tag1"]
  }
]

app.get('/note/:id', function (req: Request, res: Response) {
  const id = parseInt(req.params.id)

  if(notes.findIndex(note=>note.id == id)){
    res.sendStatus(200).send(notes.findIndex(note=>note.id == id))
  }else {
    res.sendStatus(404).send("no object")
  }
})


app.listen(3000)