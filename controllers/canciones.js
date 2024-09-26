const axios = require('axios')
const { request, response } = require('express')

const getCanciones = (req = request, res = response) => {
  const { nombre = '', nombreArtista = '', genero = '', reproducciones = '' } = req.query
  console.log(nombre, nombreArtista, genero, reproducciones)

  let filtro = '' // Variable para ver si hay filtro

  if (nombre) {
    filtro += `?nombre=${nombre}`
  }

  if (nombreArtista) {
    filtro += filtro ? `&nombreArtista=${nombreArtista}` : `?nombreArtista=${nombreArtista}`
  }

  if (genero) {
    filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`
  }

  if (reproducciones) {
    filtro += filtro ? `&reproducciones=${reproducciones}` : `?reproducciones=${reproducciones}`
  }

  axios.get(`CANCIONES/api/canciones${filtro}`)
    .then((response) => {
      const { data = [] } = response // manejar éxito
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

const getCancion = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(`CANCIONES/api/canciones/${id}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getCanciones,
  getCancion
}
