const { getAll, create, getOne, remove, update, setMovies } = require('../controllers/genre.controllers');
const express = require('express');

const routerGenre = express.Router();

routerGenre.route('/')
    .get(getAll)
    .post(create);
//genres/:id/movies
routerGenre.route('/:id/movies')
    .post(setMovies)

routerGenre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerGenre;