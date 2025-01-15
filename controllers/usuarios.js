const { response } = require('express')

const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get API - usuarios get', 
        query
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body;


    res.json({
        msg: 'Post API - usuarios post',
        body
    })
}

const usuariosPut = (req, res = response) => {


    const { id } = req.params;

    res.json({
        msg: 'Put API - usuarios put',
        id
    })
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'Patch API - usuarios patch'
    })
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Delete API - usuarios delete'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}