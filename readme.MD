Link a Render:
https://api-spotify-i03q.onrender.com/

Desarrollado por: Matías Uriel Blanco

Descripción:
Este proyecto expone dos endpoints para consultar CANCIONES desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre, nombre_artista, genero, y reproducciones, o bien obtener una canción específica mediante su id.

Endpoints
1. Obtener todas las canciones (GET)
Este endpoint devuelve una lista de canciones, y permite aplicar filtros opcionales utilizando parámetros de consulta.

URL: /api/canciones
Método: GET
    Query Params Opcionales:
    
    nombre	| Filtro por nombre de la canción | /api/canciones?nombre=Rich%20Girl
    nombre_artista | Filtro por nombre del artista | /api/canciones?nombre_artista=John
    genero | Filtro por género de la canción | /api/canciones?genero=Pop
    reproducciones | Filtro por número de reproducciones de la canción | /api/canciones?reproducciones=1000

    Ejemplo de solicitud:
    GET /api/canciones?nombre=Take%20On%20Me&genero=Pop

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

2. Obtener una canción por ID (GET)
Este endpoint devuelve los detalles de una canción específica utilizando su id.

URL: /api/canciones/{id}
Método: GET
Parámetro de ruta:

id | El ID único de la canción a buscar | /api/canciones/1

    Ejemplo de solicitud:
    GET /api/canciones/1
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



Desarrollado por: FELIPE GARCIA

Descripción:
Este proyecto expone dos endpoints para consultar PLAYLISTS desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre_playlists, genero, reproducciones o bien obtener una playlist específica mediante su id.

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



Desarrollado por: Bautista Exposito

Descripción:
Este proyecto expone dos endpoints para consultar ARTISTAS desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre, fechaDeNacimiento, genero, cancionHit, o bien obtener un artista específico mediante su id.

Endpoints

Obtener todos los artistas (GET) Este endpoint devuelve una lista de artistas, y permite aplicar filtros opcionales utilizando parámetros de consulta.
URL: /api/artistas Método: GET Query Params Opcionales:

nombre	| Filtro por nombre del artista | /api/artistas?nombre=Maxine%20Jerde
fechaDeNacimiento | Filtro por la fecha de nacimiento del artista | /api/artistas?fechaDeNacimiento=1944
genero | Filtro por género del artista | /api/artistas?genero=Woman
cancionHit | Filtro por la cancion con mas reproducciones del artista | /api/artistas?cancionHit=Faith

Ejemplo de solicitud:
GET /api/artistas?fechaDeNacimiento=2000

Respuestas:
200 - OK: La solicitud fue exitosa y devuelve la lista de artistas filtrados.
    
    {
        "msg": "Ok",
        "data": [...]
    }
400 - Bad Request: Hubo un error en la solicitud.

    {
        "msg": "Error",
        "error": {...}
    }

Obtener un artista por ID (GET) Este endpoint devuelve los detalles de un artista específico utilizando su id.
URL: /api/artistas/{id} Método: GET Parámetro de ruta:

id | El ID único del artista a buscar | /api/artistas/1

Ejemplo de solicitud:
GET /api/artistas/1
Respuestas:
200 - OK: La solicitud fue exitosa y devuelve los detalles del artista.

    {
        "msg": "Ok",
        "data": {...}
    }
400 - Bad Request: Hubo un error en la solicitud.

    {
        "msg": "Error",
        "error": {...}
    }

Desarrollado por: Joaquín Auday

Descripción
Este proyecto expone endpoints para consultar álbumes desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre, artista, genero, o bien obtener un álbum específico mediante su id.

Endpoints
1. Obtener todos los álbumes (GET)
Este endpoint devuelve una lista de álbumes y permite aplicar filtros opcionales:
URL: /api/albumes
Método: GET

2. Obtener un álbum por ID (GET)
URL: /api/albumes/{id}
Método: GET
Ejemplo: GET /api/albumes/1

3. Obtener álbumes por artista (GET)
URL: /api/albumes/buscar/artista
Query Params: artista
Ejemplo: GET /api/albumes/buscar/artista?artista=Queen

4. Obtener álbumes por género (GET)
URL: /api/albumes/buscar/genero
Query Params: genero
Ejemplo: GET /api/albumes/buscar/genero?genero=Rock