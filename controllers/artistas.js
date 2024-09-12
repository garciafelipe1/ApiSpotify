const axios = require('axios')
const { request, response } = require('express')

// const getArtistas = (req, res) => {
//   res.json({ name: 'Controlador de artistas' })
// }

const getArtistas = (req = request, res = response) => {
  const { nombre = '', fechaDeNacimiento = '', genero = '', cancionHit = '' } = req.query
  console.log(nombre, fechaDeNacimiento, genero, cancionHit)

  axios.get('https://66cfb95f181d059277dc29a2.mockapi.io/artistas')
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
