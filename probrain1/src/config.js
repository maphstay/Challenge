/** ARRAY OF MOVIES */
const movies = []

/** GLOBAL FUNCTIONS AND VALIDATIONS */
function checkRequire(req, res, next) {
    if (!req.body.title || !req.body.description || !req.body.type || 
        !req.body.classification) {
        return res.status(400).send("<h1 style='text-align: center; color: red;'>ERROR: Fill in all fields</h1>")
    }
    return next()
}

function checkMovieInArray(req, res, next) {
    const movie = movies[req.params.index];
    if (!movie) {
        return res.status(404).send("<h1 style='text-align: center; color: red;'>ERROR: Movie not exist</h1>");
    } 
    req.movie = movie
    next()
}

export { movies, checkRequire, checkMovieInArray }