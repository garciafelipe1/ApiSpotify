const axios = require('axios')
const { request, response } = require('express')

const getCanciones = (req = request, res = response) => {
  const { nombre = '', nombre_artista = '', genero = '', reproducciones = '' } = req.query
  console.log(nombre, nombre_artista, genero, reproducciones)

  const filtro = (nombre) ? `?nombre=${nombre}&reproducciones=${reproducciones}` : ''

  axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/canciones${filtro}`)
    .then((response) => {
      const { data = [] } = response   // handle success
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {     // handle error
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

  axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/canciones/${id}`)
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
  getCancion,
  getPopulares
}