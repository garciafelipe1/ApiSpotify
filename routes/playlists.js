const { Router } = require('express')
const { getPlaylists, getPlaylist } = require('../controllers/playlists')
const rutas = Router()

rutas.get('/', getPlaylists)
rutas.get('/:idplaylist', getPlaylist)

module.exports = rutas
