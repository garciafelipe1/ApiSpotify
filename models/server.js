const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/playlists', require('../routes/playlists'))
    this.app.use('/api/artistas', require('../routes/artistas'))
    this.app.use('/api/canciones', require('../routes/canciones'))
    this.app.use('/api/albumes', require('../routes/albumes'));

    this.app.use('*', (req, res) => {
      res.status(404).send('Page not found')
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server
