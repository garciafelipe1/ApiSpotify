const { Router } = require('express');
const { getAlbumes, getAlbumPorId, getAlbumesPorArtista, getAlbumesPorGenero } = require('../controllers/albumes');
const rutas = Router();

rutas.get('/', getAlbumes); 
rutas.get('/:id', getAlbumPorId); 
rutas.get('/buscar/artista', getAlbumesPorArtista); 
rutas.get('/buscar/genero', getAlbumesPorGenero);

module.exports = rutas;