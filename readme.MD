Desarrollado por: FELIPE GARCIA

Descripción Este proyecto expone dos endpoints para consultar PLAYLISTS desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre_playlists, genero, reproducciones o bien obtener una playlist específica mediante su id.

Endpoints

Endpoints

Obtener todas las playlist (GET) Este endpoint devuelve una lista de playlist, y permite aplicar filtros opcionales utilizando parámetros de consulta.

URL: /api/playlist Método: GET Query Params Opcionales:

nombre_playlist | Filtro por nombre del artista | /api/playlists?nombre_playlists=astroword
genero | Filtro por género de la canción | /api/playlists?genero=trap
reproducciones | Filtro por número de reproducciones de la canción | /api/playlists?reproducciones=110000000



Ejemplo de solicitud:
GET /api/canciones?nombre=Take%20On%20Me&genero=Pop&playlist=80s%20Hits

Respuestas:
200 - OK: La solicitud fue exitosa y devuelve la lista de canciones filtradas.
    
    {
        "msg": "Ok",
        "data": [...]
    }
400 - Bad Request: Hubo un error en la solicitud.

    {
        "msg": "Error",
        "error": {...}
    }

Obtener una playlists por ID (GET) Este endpoint devuelve los detalles de una playlists específica utilizando su id.


URL: /api/playlist/{id} Método: GET Parámetro de ruta:

id | El ID único de la canción a buscar | /api/playlist/1

Ejemplo de solicitud:
GET /api/playlist/1
Respuestas:
200 - OK: La solicitud fue exitosa y devuelve los detalles de la canción.

    {
        "msg": "Ok",
        "data": {...}
    }
400 - Bad Request: Hubo un error en la solicitud.

    {
        "msg": "Error",
        "error": {...}
    }












