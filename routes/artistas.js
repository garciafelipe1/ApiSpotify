const { Router } = require('express')
const { getArtistas } = require('../controllers/artistas')
const rutas = Router()

rutas.get('/', getArtistas)

module.exports = rutas