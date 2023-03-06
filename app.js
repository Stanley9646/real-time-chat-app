
const io =require('socket.io')(3000);

const users = {}

io.on('connection' ,socket =>{

    //name and accessing the id 
    io.on('connection', name=>{
    users[sockets.id] = name
    socket.broadcast.emit('user-connection',name )
    })
    //message 
    socket.on('send-chat-message', message =>{
        socket.broadcast.emit('chat-message', {message:message, name:users[sockets.id]} )
    })

    //deleting user once he disconnect
socket.on('User-disconnected', ()=>{
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
})


})
