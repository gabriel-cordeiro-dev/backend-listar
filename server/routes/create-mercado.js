const router = require('express').Router()
const Mercados = require('../models/mercado')

router.get('/allMercados', (req, res) => {
    Mercados.findAll()
    .then((mercados) => {
        if (mercados) {
            console.log("mercados", mercados)
            res.json(mercados)
        } else {
            console.log("Mercados não encontrados")
            return res.status(400).json({
                err: "Mercado não econtrado"
            })
        }
    })
    .catch((err) => {
        console.log("Erro", err)
        return res.json({err: err})
    })
})

router.post('/', (req, res) => {
    Mercados.create({
        mercado_nome: req.body.mercado_nome,
        preco: req.body.preco,
    })
    .then((mercado) => {
        return res.json({
            data: mercado
        })
    })
    .catch((err) => {
        console.log("Erro", err)
        return res.status(500).json({err: err})
    })
})

module.exports = router