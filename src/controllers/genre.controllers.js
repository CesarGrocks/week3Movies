const catchError = require('../utils/catchError');
const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

const getAll = catchError(async(req, res) => {
    const results = await Genre.findAll({include: [Movie]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Genre.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genre.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genre.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genre.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

//?/genres/:id/movies
const setMovies = catchError(async (req, res) => {
    //identificar la movie
    const { id } = req.params
    const genre = await Genre.findByPk(id)
  
    //seteo de movies a los géneros
    await genre.setMovies(req.body)
  
    //Obtener lo que se setea
    const movies = await genre.getMovies()
  
    return res.json(movies)

})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMovies
}