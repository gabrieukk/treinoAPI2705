import {semaforo,diaSemana, fatorial, sequenciaPar} from './services.js'

import { Router } from "express";
const server = Router();


server.get('/semaforo/:cor', (req, resp) => {
    try{
    const cor = (req.params.cor);

    const x = semaforo(cor);

    resp.send ({
        msg : x
    });
}
    catch (err) {
        resp.send({
            erro : err.message
        })
    }
})

server.get('/diasemana/', (req,resp) => {
    try{
    const a = Number(req.query.a);

    const x = diaSemana(a);

    resp.send ({
        nome : x
    });
}
    catch (err) {
        resp.send({
            erro : err.message
        })
    }
})


server.post('/fatorial/', (req,resp) => {
    try {
    const a = Number(req.query.a);

    const x = fatorial(a);

    resp.send ({
        fat: x
    });
} 
    catch (err) {
    resp.send({
        erro : err.message
        })
   }
})

server.post('/sequenciaPar/', (req,resp) => {
    const limite = req.body;

    const x = sequenciaPar (limite);

    resp.send ({
        sequenciaPar : x
    });
})

export default server;