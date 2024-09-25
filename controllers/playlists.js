const axios = require('axios')
const { request, response } = require('express')

const getPlaylists = (req = request, res = response) => {
  // Extraer los parámetros de consulta (query params) de la solicitud
  const { nombre_playlists = '', genero = '', reproducciones = '' } = req.query
  console.log(nombre_playlists, genero, reproducciones)

  // Inicializar el filtro como una cadena vacía
  let filtro = ''

  // Construir el filtro con los parámetros disponibles
  if (nombre_playlists) {
    filtro += `?nombre_playlists=${nombre_playlists}`
  }

  if (genero) {
    filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`
  }

  if (reproducciones) {
    filtro += filtro ? `&reproducciones=${reproducciones}` : `?reproducciones=${reproducciones}`
  }

  // Hacer la solicitud GET usando Axios con el filtro
  axios.get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/${filtro}`)
    .then((response) => {
      const { data = [] } = response // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getPlaylist = (req = request, res = response) => {
  const { idplaylist = '' } = req.params
  console.log(idplaylist)

  axios.get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist/${idplaylist}`)
    .then((response) => {
      const { data = [] } = response// manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => { // manejar error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// Exportar las funciones
module.exports = {
  getPlaylist,
  getPlaylists
}
