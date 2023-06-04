import express  from "express";
import { Server as webSocketServer } from "socket.io";
import http from 'http'
const app = express()
const  httpServer = http.createServer(app)
const io = new webSocketServer(httpServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', () =>{
    console.log('nueva conexion')
})
app.listen(3000)
console.log('Server on port', 3000)