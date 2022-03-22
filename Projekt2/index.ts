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



app.listen(3000)