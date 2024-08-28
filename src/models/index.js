const Actor = require('./Actor')
const Genre = require('./Genre')
const Director = require('./Director')
const Movie = require('./Movie')

//relacion un genero pertenece a muchas peliculas 
Genre.belongsToMany(Movie, { through: 'moviesGenres' })
//una pelicula pertenece a muchos generos
Movie.belongsToMany(Genre, { through: 'moviesGenres' })

// Movie.belongsToMany(Genre, { through: 'MovieGenres' })
// Genre.belongsToMany(Movie, { through: 'MovieGenres' })
