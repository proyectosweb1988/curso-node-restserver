const {response, request} = require('express');

const usuarioGet = ( req = request, res = response )=>{

    const { nombre, apellido } = req.query;
    res.json({
        ok: true,
        msj: 'usaurioGet-controller',
        nombre,
        apellido
    })
}

const usuarioPost = (req = request, res = response )=>{

    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        msj: 'UsuarioPost - controller',
        nombre,
        edad
    });
}

const usuarioPut = (req = request, res = response)=>{
    const { id } = req.params;
    res.json({
        ok: true,
        mjs: 'UsuarioPut - controller',
        id
    });
}

const usuarioPatch = (req, res)=>{
    res.json({
        ok: true,
        mjs: 'UsuarioPatch - controller'
    })
}

const usuarioDelete = (req, res)=>{
    res.json({
        ok: true,
        msj: 'UsuarioDelete - controller'
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}