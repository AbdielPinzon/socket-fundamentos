var socket = io();
//Los on, son para escuchar informacion
socket.on('connect',function(){
    console.log('conectado al servidor (socket)')
})
socket.on('disconnect',function(){
    console.log('conexión perdida con el servidor.')
})
//Los emit sirven para enviar informacion al server:
//Enviar INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Perroso',
    mensaje: 'Me la comes doblada'
},function(resp){
    console.log('respuesta del servidor: ',resp)
})
//Recibir INFORMACION
socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor: ',mensaje)
})