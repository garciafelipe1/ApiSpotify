const axios = require('axios')
const { request, response } = require('express')
const cors = require('cors') // Importar el paquete cors

// Habilitar CORS para todas las rutas
const app = require('express')()
app.use(cors()) // Esto habilita CORS en todas las rutas

// Obtener todas las playlists con filtros
const getPlaylists = (req = request, res = response) => {
  const { avatar = '', nombre = '', cantidad = '', favoritos = '', idplaylist = '' } = req.query
  console.log(avatar, nombre, cantidad, favoritos, idplaylist)

  let filtro = '' // Variable para ver si hay filtro

  if (avatar) {
    filtro += `?avatar=${avatar}`
  }

  if (nombre) {
    filtro += filtro ? `&nombre=${nombre}` : `?nombre=${nombre}`
  }

  if (cantidad) {
    filtro += filtro ? `&cantidad=${cantidad}` : `?cantidad=${cantidad}`
  }

  if (favoritos) {
    filtro += filtro ? `&favoritos=${favoritos}` : `?favoritos=${favoritos}`
  }

  if (idplaylist) {
    filtro += filtro ? `&idplaylist=${idplaylist}` : `?idplaylist=${idplaylist}`
  }

  // Crear la URL completa y mostrarla en consola
  const url = `https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist${filtro}`
  console.log('URL solicitada:', url) // Verifica la URL completa

  axios.get(url)
    .then((response) => {
      console.log('Datos recibidos:', response.data)
      const { data = [] } = response

      // Devuelvo todos los datos sin transformación
      res.status(200).json({
        msg: 'Ok',
        data // Aquí no estoy transformando nada, solo devolviendo los datos tal como los recibí
      })
    })
    .catch((error) => { // Manejo de error
      console.log('Error en la solicitud:', error.response?.data || error.message)
      res.status(400).json({
        msg: 'Error',
        error: error.message
      })
    })
}

// Obtener una playlist por ID
const getPlaylist = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist/${id}`)
    .then((response) => {
      const { data } = response

      // Devuelvo todos los datos de la playlist sin transformarlos
      res.status(200).json({
        msg: 'Ok',
        data // Aquí tampoco estoy transformando nada, solo devolviendo los datos tal como los recibí
      })
    })
    .catch((error) => { // Manejo de error
      console.log('Error en la solicitud:', error.response?.data || error.message)
      res.status(400).json({
        msg: 'Error',
        error: error.message
      })
    })
}

module.exports = {
  getPlaylists,
  getPlaylist
}
