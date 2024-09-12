const { Router } = require('express')
const { getArtistas, getArtista } = require('../controllers/artistas')
const rutas = Router()

rutas.get('/', getArtistas)
rutas.get('/:idArtista', getArtista)

module.exports = rutas
