const axios = require('axios')
const { request, response } = require('express')

const getArtistas = (req = request, res = response) => {
  const { nombre = '', fechaDeNacimiento = '', genero = '', cancionHit = '' } = req.query
  console.log(nombre, fechaDeNacimiento, genero, cancionHit)

  let filtro = '' // Variable para ver si hay filtro

  if (nombre) {
    filtro += `?nombre=${nombre}`
  }

  if (fechaDeNacimiento) {
    filtro += filtro ? `&fechaDeNacimiento=${fechaDeNacimiento}` : `?fechaDeNacimiento=${fechaDeNacimiento}`;
  }

  if (genero) {
    filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`;
  }

  if (cancionHit) {
    filtro += filtro ? `&cancionHit=${cancionHit}` : `?cancionHit=${cancionHit}`;
  }

  axios.get(`https://66cfb95f181d059277dc29a2.mockapi.io/artistas${filtro}`)
    .then((response) => {
      const { data = [] } = response
      // handle success
      // console.log(data);

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

const getArtista = (req = request, res = response) => {
  const { idArtista = '' } = req.params
  console.log(idArtista)

  axios.get(`https://66cfb95f181d059277dc29a2.mockapi.io/artistas/${idArtista}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => { // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getArtistas,
  getArtista
}
