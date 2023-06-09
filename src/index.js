import express  from "express";
import { Server as webSocketServer } from "socket.io";
import http from 'http'
import {v4 as uuid} from 'uuid'

const notes = []

const app = express()
const  httpServer = http.createServer(app)
const io = new webSocketServer(httpServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) =>{
    console.log('nueva conexion:', socket.id)

    socket.on('client:newnote', newNote =>{
        const note = {...newNote, id:uuid()}
        notes.push(note)
        socket.emit('server:newnote', note)
    })
    
})
app.listen(3000)
console.log('Server on port', 3000)