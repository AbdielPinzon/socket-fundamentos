const {io} = require('../server');

//Para que el servidor esté pendiente de las conecciones desde el frontend
io.on('connection',function(client){
    console.log('Usuario conectado al servidor')
    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'El que no se la coma, es pato. ATT: El GM'
    })

    client.on('disconnect',function(){
        console.log('Usuario desconectado.')
    })

    client.on('enviarMensaje', function(data,callback){
        console.log(data)
        client.broadcast.emit('enviarMensaje',data)
        // if(message.usuario){
        //     callback({
        //         respuesta: 'Todo salió bien'
        //     });

        // }else{
        //     callback({
        //         respuesta: 'Todo salió MAL!!!!'
        //     });
        // }
    })

});