const axios = require('axios');
const { request, response } = require('express');

const getPlaylists = (req = request, res = response) => {
  // Extraer los parámetros de consulta (query params) de la solicitud
  const { nombre_playlists = '', genero = '', reproducciones = '' } = req.query;
  console.log(nombre_playlists, genero, reproducciones);

  // Construir los parámetros de consulta utilizando URLSearchParams
  const params = new URLSearchParams();

  if (nombre_playlists) {
    params.append('nombre_playlists', nombre_playlists);
  }
  if (genero) {
    params.append('genero', genero);
  }
  if (reproducciones) {
    params.append('reproducciones', reproducciones);
  }

  // Hacer la solicitud GET usando Axios con el filtro
  axios
    .get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist?${params.toString()}`)
 
    .then((response) => {
      const { data = [] } = response; // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error,
      });
    });
};

const getPlaylist = (req = request, res = response) => {
  const { idplaylist = '' } = req.params;
  console.log(idplaylist);

  // Hacer la solicitud GET utilizando el idplaylist
  axios
    .get(`https://66f468a777b5e88970996d0d.mockapi.io/api/playlists/playlist/${idplaylist}`)
    .then((response) => {
      const { data } = response; // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error,
      });
    });
};

// Exportar las funciones
module.exports = {
  getPlaylist,
  getPlaylists,
};
