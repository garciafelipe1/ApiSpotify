const axios = require('axios');
const { request, response } = require('express');

const getAlbumes = (req = request, res = response) => {
  const { nombre = '', artista = '', genero = ''} = req.query;
  console.log(nombre, artista, genero);


  axios.get(`https://66f73310b5d85f31a3423acf.mockapi.io/api/albumes`)
    .then((response) => {
      const { data = [] } = response;
      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    });
};

const getAlbumPorId = (req = request, res = response) => {
  const { id } = req.params;

  axios.get(`https://66f73310b5d85f31a3423acf.mockapi.io/api/albumes/${id}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    });
};

const getAlbumesPorArtista = (req = request, res = response) => {
    const { artista = '' } = req.query;
  
    axios.get(`https://66f73310b5d85f31a3423acf.mockapi.io/api/albumes?artista=${artista}`)
      .then((response) => {
        const { data } = response;
        res.status(200).json({
          msg: 'Ok',
          data
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          msg: 'Error',
          error
        });
      });
  };
  
  const getAlbumesPorGenero = (req = request, res = response) => {
    const { genero = '' } = req.query;
  
    axios.get(`https://66f73310b5d85f31a3423acf.mockapi.io/api/albumes?genero=${genero}`)
      .then((response) => {
        const { data } = response;
        res.status(200).json({
          msg: 'Ok',
          data
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          msg: 'Error',
          error
        });
      });
  };
  
  module.exports = { getAlbumes, getAlbumPorId, getAlbumesPorArtista, getAlbumesPorGenero };
  