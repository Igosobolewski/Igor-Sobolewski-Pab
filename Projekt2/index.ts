import { Console } from 'console'
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

interface Tag {
  id?: number;
  name: string;
}

const notes : Note[] =[
  {
    id: 1,
    title: "testufoporno",
    content: "this is a test note",
    createDate: "rndDate",
    tags:['Poniedzialek']
  }
]

const Tags : Tag[] =[
  {
    id: 1,
    name: 'Test'
  }
]

app.get('/:notes/:tags', async function (req: Request, res: Response) {
  
  const id = parseInt(req.body.id)

  if(notes.findIndex(note=>note.id == id)){
    res.sendStatus(200).send(notes.findIndex(note=>note.id == id))
  }else {
    res.sendStatus(404).send("no object")
  }
})

app.post('/:notes/:tags', function (req: Request, res: Response) {
  const data = new Date().toISOString()
  const tags = req.body.tags
  const id = req.body.id == null? Date.now(): req.body.id
  const newNote : Note =
  {
    id : id, 
    title : req.body.title,
    content : req.body.content,
    createDate : data,
    tags : req.body.tags
  }

  const newTag : Tag = {
    id : id,
    name : req.params.name
  }

  if(newTag.name !== null && newTag.id !== null) {
    Tags.push(newTag)
    console.log(req.body)
    res.sendStatus(201).send(newTag.id)
  }else {
    res.sendStatus(404).send('Object not found')
  }

  if(newNote.title!==null && newNote.content!==null)
  {
    notes.push(newNote);
    console.log(req.body) 
    res.sendStatus(201).send(newNote.id)
  }else{
    res.sendStatus(400).send("no title or content")
  }
  })


  app.put('/note/:tags', function (req: Request, res: Response) {
    const id = parseInt(req.body.id)
    if(notes.findIndex(note=>note.id == id)){
      notes[notes.findIndex(note=>note.id == id)] = req.body;
      res.sendStatus(200).send(notes.findIndex(note=>note.id == id))
    }else{
      res.sendStatus(404).send("no object")
    }
  })

  /*[]
  
  app.delete('/note/:id', function(req: Request, res: Response){
    const id = parseInt(req.body.id)
    if(notes.find(note=>note.id == id)){
      res.sendStatus(200).send(notes.findIndex(note=>note.id == id))
      notes.splice(notes.findIndex(note=>note.id == id),1)
    }else{
      res.sendStatus(404).send("no object")
    }
  })
*/

app.listen(3000) 