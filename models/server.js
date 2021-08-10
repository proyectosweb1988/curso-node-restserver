const express = require('express');
const router = require('../router/usuarios');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        // Middlewares
        this.middlewares();
        // Rutas de la aplicacion 
        this.routes();

    }

    middlewares(){
        // Directorio publico
        this.app.use(express.static('public')) // use es la palabra clave para saber que se usara un middleware
        this.app.use(express.json());
        
    }
    // Metodo donde se almacenan las rutas del server
    routes(){

        // Peticion GET
        this.app.use(this.usuariosPath, router)
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}


module.exports = Server;