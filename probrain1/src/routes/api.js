import { movies, checkRequire, checkMovieInArray } from '../config.js'
import express from "express"

const api = express.Router();

/** GENERAL SETTINGS */
api.use(express.urlencoded({extended: true}))
api.use(express.json())


/** API ROUTES */
api.get('/api/movies', (req, res) => {
    return res.json(movies)
})

/** CREATE NEW MOVIE */
api.post('/api/movie', checkRequire, (req, res) => {
    const movie = req.body
    movies.push(movie)
    return res.json(movie)
})

/** ALTER MOVIE */
api.put('/api/movie/:index', checkRequire, checkMovieInArray, (req, res) => {
    const { index } = req.params
    const movie = req.body
    movies[index] = movie
    return res.json(movie)
})

/** DELETE MOVIE */
api.delete('/api/movie/:index', checkMovieInArray, (req, res) => {
    const { index } = req.params
    movies.splice(index, 1)
    return res.json(movies)
}) 

export { api }