const { Router } = require('express')
const { getCanciones, getCancion } = require('../controllers/canciones')
const rutas = Router()

rutas.get('/', getCanciones)
rutas.get('/:id', getCancion)

module.exports = rutas