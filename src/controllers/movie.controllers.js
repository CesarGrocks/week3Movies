const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const Director = require('../models/Director');
const Actor = require('../models/Actor');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include: [Genre, Director, Actor]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id, { include: [Genre, Director, Actor]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

//?/movies/:Id/genres
const setGenres = catchError(async (req, res) => {
  //identificar la movie
  const { id } = req.params
  const movie = await Movie.findByPk(id)

  //seteo de los generos a las movies
  await movie.setGenres(req.body)

  //Obtener el seteo, para tener la vista
  const genres = await movie.getGenres()

  //retorno final
  return res.json(genres)

})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres
}