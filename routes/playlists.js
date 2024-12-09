const { Router } = require('express')
const { getPlaylists, getPlaylist } = require('../controllers/playlists')
const rutas = Router()

// Ruta para obtener todas las playlists
rutas.get('/', getPlaylists)

// Ruta para obtener una playlist por ID
rutas.get('/:id', getPlaylist)

module.exports = rutas
