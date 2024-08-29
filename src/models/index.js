const Actor = require('./Actor')
const Genre = require('./Genre')
const Director = require('./Director')
const Movie = require('./Movie')

// Movies/:id/genres
Movie.belongsToMany(Genre, { through: 'movies_genres' })  //una pelicula pertenece a muchos generos
Genre.belongsToMany(Movie, { through: 'movies_genres' }) //relacion un genero pertenece a muchas peliculas 

// Movies/:id/actors
Movie.belongsToMany(Actor, { through: 'Movies_actors' })
Actor.belongsToMany(Movie, { through: 'Movies_actors' })

// Movies/:id/directors
Movie.belongsToMany(Director, { through: 'Movies_directors' })
Director.belongsToMany(Movie, { through: 'Movies_directors' })
