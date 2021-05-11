import { movies, checkRequire, checkMovieInArray } from '../config.js'
import express from "express"

const crud = express.Router()

/** GENERAL SETTINGS */
crud.use(express.urlencoded({extended: true}))
crud.use(express.json())

/** INTEGRATION ROUTES */
/** HOME PAGE */
crud.get('/movies', (req, res) => {
    return res.render('index.ejs')
})

/** PAGE REGISTER */
crud.get('/movie/new', (req, res) => {
    return res.render('register.ejs')
})

/** PAGE ALTERATION */
crud.get('/movie/edit/:index', checkMovieInArray, (req, res) => {
    const { index } = req.params;
    const movie = movies[index]
    return res.render('edit.ejs', {
        data: movie,
        id: index
    })
})

/** CREATE NEW MOVIE */
crud.post('/movie/new', checkRequire, (req, res) => {
    const movie = req.body
    movies.push(movie)
    return res.redirect('/movies')
})

/** ALTER MOVIE */
crud.post('/movie/edit/:index', checkRequire, checkMovieInArray, (req, res) => {
    const { index } = req.params;
    const movie = req.body
    movies[index] = movie;
        setTimeout(() => {
            return res.redirect(`/movies`)
    }, 2000);
})

/** DELETE MOVIE */
crud.post('/movie/delete/:index', checkMovieInArray, (req, res) => {
    const { index } = req.params;
    movies.splice(index, 1)
    return res.redirect(`/movies`)
})

export { crud }