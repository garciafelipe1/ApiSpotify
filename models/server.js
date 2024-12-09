const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(cors())
    this.app.use(express.static('public'))
    this.app.use(express.json()) // Asegúrate de incluir esto para manejar JSON
  }

  rutas () {
    this.app.use('/api/playlists', require('../routes/playlists')) // Esto mapea las rutas en playlist.js
    this.app.use('/api/artistas', require('../routes/artistas'))
    this.app.use('/api/canciones', require('../routes/canciones'))
    this.app.use('/api/albumes', require('../routes/albumes'))

    this.app.use('*', (req, res) => {
      res.status(404).send('Page not found')
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto ${this.port}`)
    })
  }
}

module.exports = Server
