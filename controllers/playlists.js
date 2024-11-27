const axios = require('axios')
const { request, response } = require('express')

// Obtener todas las playlists con filtros
const getPlaylists = (req = request, res = response) => {
  const { nombre = '', creador = '', genero = '', seguidores = '' } = req.query
  console.log(nombre, creador, genero, seguidores)

  let filtro = '' // Variable para construir el filtro

  if (nombre) {
    filtro += `?nombre=${nombre}`
  }

  if (creador) {
    filtro += filtro ? `&creador=${creador}` : `?creador=${creador}`
  }

  if (genero) {
    filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`
  }

  if (seguidores) {
    filtro += filtro ? `&seguidores=${seguidores}` : `?seguidores=${seguidores}`
  }

  axios
    .get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist${filtro}`)
    .then((response) => {
      const { data = [] } = response // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error) // manejar error
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// Obtener una playlist por ID
const getPlaylist = (req = request, res = response) => {
  const { idplaylist = '' } = req.params
  console.log(idplaylist)

  axios
    .get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist/${idplaylist}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error) // manejar error
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getPlaylists,
  getPlaylist
}
