const { Router } = require('express')
const { getPlaylists, getPlaylist } = require('../controllers/playlists')
const rutas = Router()

rutas.get('/', getPlaylists)
rutas.get('/:id', getPlaylist)

module.exports = rutas