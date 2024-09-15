const axios = require('axios')
const { request, response } = require('express')


const getPlaylists =(req=request,res= response)=>{
    const{nombre_playlists= '',genero='',reproducciones=''}=req.query;
    console.log(nombre_playlists,genero,reproducciones)
}

    let filtro='';

    if(nombre_playlists){
        filtro += `?nombre_playlists=${nombre_playlists}`;
    }

    if(genero){
        filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`;
    }

    if(reproduciones){
        filtro += filtro ? `&reproducciones=${reproducciones}` : `?reproducciones=${reproducciones}`;  
    }
    axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/playlists${filtro}`)
    .then((response) => {
      const { data = [] } = response;  // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {  // manejar error
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    });



const getPlaylist = (req = request, res = response) => {
    const { idplaylist = '' } = req.params
    console.log(idplaylist)

    axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/playlists${idplaylist}`)
    .then((response) => {
      const { data = [] } = response;  // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {  // manejar error
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    })

    module.exports = {
        getPlaylist,
        getPlaylists
      }


}
