const Actor = require('./Actor')
const Genre = require('./Genre')
const Director = require('./Director')
const Movie = require('./Movie')

// Movies/:id/genres
Movie.belongsToMany(Genre, { through: 'movies_genres' })  //una pelicula pertenece a muchos generos
Genre.belongsToMany(Movie, { through: 'movies_genres' }) //relacion un genero pertenece a muchas peliculas 

// Movies/:id/actors
Movie.belongsToMany(Actor, { through: 'Movie_actors' })
Genre.belongsToMany(Movie, { through: 'Movie_actors' })

// Movies/:id/directors
Movie.belongsToMany(Director, { through: 'Movie_directors' })
Director.belongsToMany(Movie, { through: 'Movie_directors' })
