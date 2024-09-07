const { Router } = require('express')
const { getCanciones, getCancion, getPopulares } = require('../controllers/canciones')
const rutas = Router()

rutas.get('/', getCanciones)
rutas.get('/:id', getCancion)
rutas.get('/populares', getPopulares); 

module.exports = rutas